class Folder {
    constructor(files = []) {
        this.nodeEl = document.querySelector('#root');
        this.selectedEl = [];
        this.init(files);
    }
    init(files) {
        files.forEach((fileName) => this.createFile(fileName));

        this.nodeEl.addEventListener('click', () => {
            if (document.querySelector('.context-menu')) {
                document.querySelector('.context-menu').remove();
            }
            if (document.querySelector('.selecting-area')) {
                document.querySelector('.selecting-area').remove();
            }
        });

        this.nodeEl.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            const options = event.target === this.nodeEl ? ['Create'] : ['Rename', 'Delete'];

            this.createContextMenu(options, event);
        });

        this.nodeEl.addEventListener('dragstart', (event) => {
            event.target.classList.add('selected');
        });

        this.nodeEl.addEventListener('dragend', (event) => {
            event.target.classList.remove('selected');
        });

        this.nodeEl.addEventListener('dragover', (event) => {
            event.preventDefault();

            const activeElement = this.nodeEl.querySelector('.selected');
            const currentElement = event.target;

            const isMoveable =
                activeElement !== currentElement && currentElement.classList.contains('item');

            if (!isMoveable) {
                return;
            }

            const nextElement = this.getNextFile(event.clientX, currentElement);

            if (
                (nextElement && activeElement === nextElement.previousElementSibling) ||
                activeElement === nextElement
            ) {
                return;
            }

            this.nodeEl.insertBefore(activeElement, nextElement);
        });

        this.nodeEl.addEventListener('mousedown', (event) => {
            if (event.target === this.nodeEl) {
                this.createSelectingArea(event.clientX, event.clientY);
            }
        });
    }
    createFile(fileName) {
        const file = this.createElement(
            'li',
            {
                className: 'item',
                draggable: true
            },
            fileName
        );

        this.addIconToFile(file, fileName);
        this.nodeEl.append(file);
    }
    addIconToFile(fileEl, fileName) {
        const ext = fileName.match(/\.[0-9a-z]+$/i);
        const extStr = ext ? ext[0].slice(1) : '';

        for (const type in icons) {
            for (const extItem of icons[type]) {
                if (extItem === extStr) {
                    fileEl.classList.add(type);
                    return;
                }
            }
        }

        fileEl.classList.add('other');
    }
    removeFile() {
        while (this.selectedEl.length > 0) {
            this.selectedEl.pop().remove();
        }
    }
    getNextFile = (cursorPosition, currentElement) => {
        const currentElementCoord = currentElement.getBoundingClientRect();
        const currentElementCenter = currentElementCoord.x + currentElementCoord.width / 2;

        const nextElement =
            cursorPosition < currentElementCenter
                ? currentElement
                : currentElement.nextElementSibling;

        return nextElement;
    };
    createContextMenu(options, event) {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }

        if (document.querySelector('.selecting-area')) {
            document.querySelector('.selecting-area').remove();
        }

        const { clientX, clientY, target } = event;

        const optionHandlers = {
            Create: () => {
                const fileName = prompt('Enter file name');
                if (fileName && fileName.trim()) {
                    this.createFile(fileName);
                }
            },
            Rename: () => {
                const fileName = prompt('Enter file name', target.innerText);
                if (fileName && fileName.trim()) {
                    target.innerText = fileName;
                    target.className = 'item';
                    this.addIconToFile(target, fileName);
                }
            },
            Delete: () => {
                this.selectedEl.push(target);
                this.removeFile();
            }
        };

        const menu = this.createElement('ul', {
            className: 'context-menu',
            children: options.map((optionName) =>
                this.createElement('li', { onclick: optionHandlers[optionName] }, optionName)
            )
        });

        menu.style.left = `${clientX}px`;
        menu.style.top = `${clientY}px`;

        this.nodeEl.append(menu);
    }
    createSelectingArea(x1, y1, x2 = 0, y2 = 0) {
        const selectingArea = this.createElement('div', { className: 'selecting-area' });
        let selectedAreaPoints;

        const reCalc = () => {
            const x3 = Math.min(x1, x2);
            const x4 = Math.max(x1, x2);
            const y3 = Math.min(y1, y2);
            const y4 = Math.max(y1, y2);

            selectingArea.style.left = x3 + 'px';
            selectingArea.style.top = y3 + 'px';
            selectingArea.style.width = x4 - x3 + 'px';
            selectingArea.style.height = y4 - y3 + 'px';

            selectedAreaPoints = [x3, y3, x4, y4];
        };

        document.body.append(selectingArea);

        const mouseMoveHandler = (event) => {
            x2 = event.clientX;
            y2 = event.clientY;
            reCalc();
        };
        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            selectingArea.remove();

            const [x1, y1, x2, y2] = selectedAreaPoints;

            const files = this.nodeEl.querySelectorAll('.item');
            for (const file of files) {
                const currentElementCoor = file.getBoundingClientRect();

                const isCollision =
                    currentElementCoor.x <= x2 &&
                    currentElementCoor.width + currentElementCoor.x >= x1 &&
                    currentElementCoor.y <= y2 &&
                    currentElementCoor.height + currentElementCoor.y >= y1;

                if (isCollision) {
                    const isInArr = this.selectedEl.find((el) => el === file);
                    if (isInArr) {
                        this.selectedEl.splice(this.selectedEl.indexOf(isInArr, 0), 1);
                        file.style.backgroundColor = '';
                    } else {
                        file.style.backgroundColor = '#ddd';
                        this.selectedEl.push(file);
                    }
                }
            }
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        selectingArea.addEventListener('mouseup', mouseUpHandler);
    }
    createElement(tagName, props = {}, innerText) {
        const $el = document.createElement(tagName);

        for (const propName in props) {
            if (propName === 'children' && props.children) {
                $el.append(...props.children);
            } else if (typeof props[propName] !== 'undefined') {
                $el[propName] = props[propName];
            }
        }

        if (innerText) {
            $el.innerText = innerText;
        }

        return $el;
    }
}

const icons = {
    folder: [''],
    image: ['jpg', 'jpeg', 'png', 'ico', 'svg', 'bmp'],
    audio: ['mp3', 'aac', 'flac', 'wav'],
    video: ['mp4', 'avi', 'mpeg', 'mkv', 'mov'],
    code: ['html', 'css', 'js', 'json', 'sass', 'less', 'txt', 'gitignore']
};
const listOfFiles = [
    'photo-001.jpg',
    'photo-002.jpg',
    'funny-video.mkv',
    'crazy frog.mp3',
    'test.json',
    'index.html',
    'xxx.mov',
    '.gitignore',
    'Academy'
];
const folder = new Folder(listOfFiles);

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('.context-menu')) {
        document.querySelector('.context-menu').remove();
    }
});
