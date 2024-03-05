// Function to create and append the header
function createHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    const headerInfoDiv = document.createElement('div');
    headerInfoDiv.className = 'header-info';

    const avatarImg = document.createElement('img');
    avatarImg.src = './assets/image/avatar.png';
    avatarImg.alt = 'Avatar';

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Mohamed';

    const dropdownSpan = document.createElement('span');
    const chevronIcon = document.createElement('i');
    chevronIcon.className = 'fa fa-chevron-down fa-1x';

    dropdownSpan.appendChild(chevronIcon);

    headerInfoDiv.appendChild(avatarImg);
    headerInfoDiv.appendChild(nameParagraph);
    headerInfoDiv.appendChild(dropdownSpan);

    headerDiv.appendChild(headerInfoDiv);

    // Append header to the document
    document.getElementById('header').appendChild(headerDiv);
}

// Function to create and append the sidebar
function createSidebar() {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.className = 'sidebar';

    const sidebarMainDiv = document.createElement('div');
    sidebarMainDiv.className = 'sidebar-main';

    const logoImg = document.createElement('img');
    logoImg.src = './assets/image/AyaSMS.png';
    logoImg.alt = 'AyaSMS Logo';


    sidebarMainDiv.appendChild(logoImg);

    sidebarDiv.appendChild(sidebarMainDiv);

    const hr = document.createElement('hr');
    sidebarDiv.appendChild(hr);

    const sidebarList = document.createElement('ul');
    sidebarList.className = 'sidebar-list';

    // Creating list items dynamically
    const items = [
        { iconClass: 'fa fa-home fa-1x', text: 'الاساسية', href: 'dashbord.html' },
        { iconClass: 'fa fa-sms fa-1x', text: 'ارسال رسائل متعددة', href: 'bulksms.html' },
        { iconClass: 'fa fa-paperclip fa-1x', text: 'نماذج الرسائل', href: 'template.html' },
        { iconClass: 'fa fa-history fa-1x', text: 'سجلات الرسائل', href: 'history.html' },
        { iconClass: 'fa fa-phone fa-1x', text: 'ارقام العملاء', href: 'contacts.html' },
        { iconClass: 'fa fa-code fa-1x', text: 'واجهة برمجة التطبيقات', href: 'developerapi.html' },
        { iconClass: 'fa fa-cog fa-1x', text: 'الاعدادات', href: 'settings.html' }
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'sidebar-item';

        const link = document.createElement('a');
        link.href = item.href;

        const iconSpan = document.createElement('span');
        const icon = document.createElement('i');
        icon.className = item.iconClass;

        iconSpan.appendChild(icon);
        link.appendChild(iconSpan);

        const textParagraph = document.createElement('p');
        textParagraph.textContent = item.text;

        link.appendChild(textParagraph);
        listItem.appendChild(link);

        sidebarList.appendChild(listItem);
    });

    sidebarDiv.appendChild(sidebarList);

    // Append sidebar to the document
    document.getElementById('sidebar').appendChild(sidebarDiv);
}

// Call the functions to create and append header and sidebar
createHeader();
createSidebar();
