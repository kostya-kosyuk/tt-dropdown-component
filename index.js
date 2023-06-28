const data = [
    {
        title: 'Country 1',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 1.1', selected: false, isExpanded: false, nodes: [{title: 'City 1.1.1', selected: false}] },
            { title: 'City 1.2', selected: false, isExpanded: false, },
            { title: 'City 1.3', selected: false, isExpanded: false, },
            { title: 'City 1.4', selected: false, isExpanded: false, },
            { title: 'City 1.5', selected: false, isExpanded: false, },
            { title: 'City 1.6', selected: false, isExpanded: false, },
            { title: 'City 1.7', selected: false, isExpanded: false, },
            { title: 'City 1.8', selected: false, isExpanded: false, },
            { title: 'City 1.9', selected: false, isExpanded: false, },
            { title: 'City 1.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 2',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 2.1', selected: false, isExpanded: false, },
            { title: 'City 2.2', selected: false, isExpanded: false, },
            { title: 'City 2.3', selected: false, isExpanded: false, },
            { title: 'City 2.4', selected: false, isExpanded: false, },
            { title: 'City 2.5', selected: false, isExpanded: false, },
            { title: 'City 2.6', selected: false, isExpanded: false, },
            { title: 'City 2.7', selected: false, isExpanded: false, },
            { title: 'City 2.8', selected: false, isExpanded: false, },
            { title: 'City 2.9', selected: false, isExpanded: false, },
            { title: 'City 2.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 3',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 3.1', selected: false, isExpanded: false, },
            { title: 'City 3.2', selected: false, isExpanded: false, },
            { title: 'City 3.3', selected: false, isExpanded: false, },
            { title: 'City 3.4', selected: false, isExpanded: false, },
            { title: 'City 3.5', selected: false, isExpanded: false, },
            { title: 'City 3.6', selected: false, isExpanded: false, },
            { title: 'City 3.7', selected: false, isExpanded: false, },
            { title: 'City 3.8', selected: false, isExpanded: false, },
            { title: 'City 3.9', selected: false, isExpanded: false, },
            { title: 'City 3.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 4',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 4.1', selected: false, isExpanded: false, },
            { title: 'City 4.2', selected: false, isExpanded: false, },
            { title: 'City 4.3', selected: false, isExpanded: false, },
            { title: 'City 4.4', selected: false, isExpanded: false, },
            { title: 'City 4.5', selected: false, isExpanded: false, },
            { title: 'City 4.6', selected: false, isExpanded: false, },
            { title: 'City 4.7', selected: false, isExpanded: false, },
            { title: 'City 4.8', selected: false, isExpanded: false, },
            { title: 'City 4.9', selected: false, isExpanded: false, },
            { title: 'City 4.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 5',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 5.1', selected: false, isExpanded: false, },
            { title: 'City 5.2', selected: false, isExpanded: false, },
            { title: 'City 5.3', selected: false, isExpanded: false, },
            { title: 'City 5.4', selected: false, isExpanded: false, },
            { title: 'City 5.5', selected: false, isExpanded: false, },
            { title: 'City 5.6', selected: false, isExpanded: false, },
            { title: 'City 5.7', selected: false, isExpanded: false, },
            { title: 'City 5.8', selected: false, isExpanded: false, },
            { title: 'City 5.9', selected: false, isExpanded: false, },
            { title: 'City 5.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 6',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 6.1', selected: false, isExpanded: false, },
            { title: 'City 6.2', selected: false, isExpanded: false, },
            { title: 'City 6.3', selected: false, isExpanded: false, },
            { title: 'City 6.4', selected: false, isExpanded: false, },
            { title: 'City 6.5', selected: false, isExpanded: false, },
            { title: 'City 6.6', selected: false, isExpanded: false, },
            { title: 'City 6.7', selected: false, isExpanded: false, },
            { title: 'City 6.8', selected: false, isExpanded: false, },
            { title: 'City 6.9', selected: false, isExpanded: false, },
            { title: 'City 6.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 7',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 7.1', selected: false, isExpanded: false, },
            { title: 'City 7.2', selected: false, isExpanded: false, },
            { title: 'City 7.3', selected: false, isExpanded: false, },
            { title: 'City 7.4', selected: false, isExpanded: false, },
            { title: 'City 7.5', selected: false, isExpanded: false, },
            { title: 'City 7.6', selected: false, isExpanded: false, },
            { title: 'City 7.7', selected: false, isExpanded: false, },
            { title: 'City 7.8', selected: false, isExpanded: false, },
            { title: 'City 7.9', selected: false, isExpanded: false, },
            { title: 'City 7.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 8',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 8.1', selected: false, isExpanded: false, },
            { title: 'City 8.2', selected: false, isExpanded: false, },
            { title: 'City 8.3', selected: false, isExpanded: false, },
            { title: 'City 8.4', selected: false, isExpanded: false, },
            { title: 'City 8.5', selected: false, isExpanded: false, },
            { title: 'City 8.6', selected: false, isExpanded: false, },
            { title: 'City 8.7', selected: false, isExpanded: false, },
            { title: 'City 8.8', selected: false, isExpanded: false, },
            { title: 'City 8.9', selected: false, isExpanded: false, },
            { title: 'City 8.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 9',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 9.1', selected: false, isExpanded: false, },
            { title: 'City 9.2', selected: false, isExpanded: false, },
            { title: 'City 9.3', selected: false, isExpanded: false, },
            { title: 'City 9.4', selected: false, isExpanded: false, },
            { title: 'City 9.5', selected: false, isExpanded: false, },
            { title: 'City 9.6', selected: false, isExpanded: false, },
            { title: 'City 9.7', selected: false, isExpanded: false, },
            { title: 'City 9.8', selected: false, isExpanded: false, },
            { title: 'City 9.9', selected: false, isExpanded: false, },
            { title: 'City 9.10', selected: false, isExpanded: false, },
        ],
    },
    {
        title: 'Country 10',
        selected: false,
        isExpanded: false,
        nodes: [
            { title: 'City 10.1', selected: false, isExpanded: false, },
            { title: 'City 10.2', selected: false, isExpanded: false, },
            { title: 'City 10.3', selected: false, isExpanded: false, },
            { title: 'City 10.4', selected: false, isExpanded: false, },
            { title: 'City 10.5', selected: false, isExpanded: false, },
            { title: 'City 10.6', selected: false, isExpanded: false, },
            { title: 'City 10.7', selected: false, isExpanded: false, },
            { title: 'City 10.8', selected: false, isExpanded: false, },
            { title: 'City 10.9', selected: false, isExpanded: false, },
            { title: 'City 10.10', selected: false, isExpanded: false, },
        ],
    },
];

class TreeView {
    constructor(data, containerId) {
        this.data = data;
        this.container = document.getElementById(containerId);
        this.createTreeView();
    }

    createTreeView() {
        const rootList = document.createElement('ul');
        rootList.className = 'treeview__nodes-container flex-column';

        this.data.forEach(item => {
            const listItem = this.createListItem(item);
            rootList.appendChild(listItem);
        });

        this.container.appendChild(rootList);
    }

    createListItem(item) {
        const nodeItemElement = new NodeItem(item).element;

        if (item.nodes && item.nodes.length > 0) {
            const nestedListElement = this.createNestedList(item.nodes);

            nodeItemElement.appendChild(nestedListElement);
        }

        return nodeItemElement;
    }

    createNestedList(nodes) {
        const nodeListElement = document.createElement('ul');
        nodeListElement.className = 'd-flex flex-column ps-2';

        nodes.forEach(item => {
            const nodeElement = this.createListItem(item);
            nodeListElement.appendChild(nodeElement);
        });

        return nodeListElement;
    }
}

class NodeItem {
    constructor(node) {
        this.node = node;
        this.element = null;
        this.arrowIcon = null;
        this.checkbox = null;
        this.title = null;
        this.isExpanded = false;

        this.create();
    }

    create() {
        this.element = document.createElement('li');
        this.element.className = 'node-item d-flex flex-column';

        const container = document.createElement('div');
        container.className = 'node-item-container d-flex flex-row  ps-3';

        const arrowContainer = document.createElement('div');
        arrowContainer.className = 'd-flex align-items-center justify-content-center px-1';

        this.arrowIcon = document.createElement('i');
        this.arrowIcon.className = 'fas fa-solid fa-chevron-up fa-xs';
        this.arrowIcon.classList.toggle('invisible', !(this.node.nodes && this.node.nodes.length > 0));
        arrowContainer.appendChild(this.arrowIcon);

        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'd-flex align-items-center justify-content-center px-1';

        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'd-flex align-items-center justify-content-center position-relative form-check node-item__checkbox';

        this.checkbox = document.createElement('input');
        this.checkbox.className = 'form-check-input invisible';
        this.checkbox.type = 'checkbox';
        this.checkbox.id = `checkbox_${this.node.title}`;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.className = 'node-item__checkbox form-check-label';
        checkboxLabel.htmlFor = this.checkbox.id;

        checkboxWrapper.appendChild(this.checkbox);
        checkboxWrapper.appendChild(checkboxLabel);
        checkboxContainer.appendChild(checkboxWrapper);

        this.title = document.createElement('div');
        this.title.className = 'node-item__title d-flex align-items-center';
        this.title.textContent = this.node.title;

        container.appendChild(arrowContainer);
        container.appendChild(checkboxContainer);
        container.appendChild(this.title);

        this.element.appendChild(container);

        this.addEventListeners();
    }

    addEventListeners() {
        this.arrowIcon.addEventListener('click', this.handleArrowClick.bind(this));
        this.checkbox.addEventListener('click', this.handleCheckboxClick.bind(this));
    }

    handleArrowClick() {
        this.isExpanded = !this.isExpanded;
        this.arrowIcon.classList.toggle('arrow-down', this.isExpanded);
        this.element.classList.toggle('expanded', this.isExpanded);


        // TODO: Handle the expansion/collapse logic
    }

    handleCheckboxClick() {
        
    }

    getElement() {
        return this.element;
    }
}


const treeview = new TreeView(data, 'nodes-container');