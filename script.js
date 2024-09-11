// Initialize files from localStorage or use default
const files = JSON.parse(localStorage.getItem('files')) || {
    bait: [
{ name: 'GBS101', type: 'zip', url: 'https://drive.google.com/file/d/1OMpM5Xv9znOG02hBpaL_Dowc9FZRLSli/view?usp=drive_link.zip' },
        { name: 'IPG204 OOP', type: 'zip', url: 'https://drive.google.com/drive/folders/1db8ztiutImGO01ijc1-BguG2nCt1xvqE?usp=drive_link' },
        { name: 'IPG203', type: 'zip', url: 'https://drive.google.com/drive/folders/1Jq76Nl79Lhx4exhQ1546iU0aOrQT2U6M?usp=drive_link' },
        { name: 'IPG202', type: 'zip', url: 'https://drive.google.com/drive/folders/11J3LNMCRye9pGAM0-2vQSqpbWTAa-lfG?usp=drive_link' },
        { name: 'IPG101', type: 'zip', url: 'https://drive.google.com/drive/folders/1ez7-JavcsXBxWc0WBorliBz6cgs_G_8Z?usp=drive_link' },
        { name: 'IOS101', type: 'zip', url: 'https://drive.google.com/drive/folders/1R1lIfET2wykHzK9keNMwv3gNmCkRbwVr?usp=drive_link' },
        { name: 'IOS202', type: 'zip', url: 'https://drive.google.com/drive/folders/1IXZ8FMIxNEwwrS-BjuNeRnxKYByXyCw5?usp=drive_link' },
        { name: 'INT101', type: 'zip', url: 'https://drive.google.com/drive/folders/13Jq6y4YyoSWyVguAWyZMjKNniOZIlfS1?usp=drive_link' },
        { name: 'INT202', type: 'zip', url: 'https://drive.google.com/drive/folders/1bUG6B-NUhd1RxUz7ngb4nRaCgscAboa7?usp=drive_link' },
        { name: 'INT203', type: 'zip', url: 'https://drive.google.com/drive/folders/1xc6rKC8cj43n6X42wMUfQr8GLd-Jxt1p?usp=drive_link' },
        { name: 'IIS101', type: 'zip', url: 'https://drive.google.com/drive/folders/1J4YXilT60QYyxodxMgUC9x7_wxdyhnAd?usp=drive_link' },
        { name: 'IIS202', type: 'zip', url: 'https://drive.google.com/drive/folders/1AMHoWa9CgmKW9Mi-qEuQx_ZYVMtutLUb?usp=drive_link' },
        { name: 'IIS303', type: 'zip', url: 'https://drive.google.com/drive/folders/15WMGUDsza0yu5kLupMu5cKg8HCw407yu?usp=drive_link' },
        { name: 'IIS404', type: 'zip', url: 'https://drive.google.com/drive/folders/17wsCleZs9pvjHlCobIi0eHAy_sWZ5Upi?usp=drive_link' },
        { name: 'IIS405', type: 'zip', url: 'https://drive.google.com/drive/folders/1E8IM0_nTZrceNTiRMcmjG-wn3yiFjWIW?usp=drive_link' },
        { name: 'IIS406', type: 'zip', url: 'https://drive.google.com/drive/folders/1Tl1LwOxvMEOZ5YH8Gd4UI3Di1i_FHwgf?usp=drive_link' },
        { name: 'GHS101', type: 'zip', url: 'https://drive.google.com/drive/folders/19Txgg8fDS09pgNEj3NO5rDSW56cgeic-?usp=drive_link' },
        { name: 'GHS102', type: 'zip', url: 'https://drive.google.com/drive/folders/1SebIR1W2M-A0gYCpu0_1SF53MrsmGzvM?usp=drive_link' },
        { name: 'GMA102', type: 'zip', url: 'https://drive.google.com/drive/folders/1TynaJVOQdffzSEEsWrX3ZyGhCTHj5t6z?usp=drive_link' },
        { name: 'GMA204', type: 'zip', url: 'https://drive.google.com/drive/folders/1zIQ9XJaAo1vHL6kEl-Qn760qKHvCNc5X?usp=drive_link' },
        { name: 'GMA205', type: 'zip', url: 'https://drive.google.com/drive/folders/1wbgXNB0h67lSZxrNSP4hKOZezo2IGFKY?usp=drive_link' },
        { name: 'GBS102', type: 'zip', url: 'https://drive.google.com/drive/folders/1Gpbyhh9rdNbsWRDncPGZ_uPVhlw5CRI2?usp=drive_link' },
        { name: 'GBS103', type: 'zip', url: 'https://drive.google.com/drive/folders/1E2Jf_JKJgJq7QbsMBBCtqXvKgLDoevt1?usp=drive_link' },
        { name: 'GDE101', type: 'zip', url: 'https://drive.google.com/drive/folders/1_ehOEjEuXyCHKrH78PQqRsNJ59pbg7I1?usp=drive_link' },
        { name: 'BMN101', type: 'zip', url: 'https://drive.google.com/drive/folders/1BbcWdty5LV5A4t3R3n3DzGXn7m5MUM9K?usp=drive_link' },
        { name: 'BMN202', type: 'zip', url: 'https://drive.google.com/drive/folders/1wJEbcJcfgvbtE2SCPqI2xux-CJ7m1zAl?usp=drive_link' },
        { name: 'BMN203', type: 'zip', url: 'https://drive.google.com/drive/folders/16RqvV51mldqim-oHVXffbDnIkbcGj8T6?usp=drive_link' },
        { name: 'BFB201', type: 'zip', url: 'https://drive.google.com/drive/folders/1yFcMYn3TzyR4Thlb6EZ6ALL0X-tCfSPs?usp=drive_link' },
        { name: 'BFB305', type: 'zip', url: 'https://drive.google.com/drive/folders/103N28NJncVBmjX2gsPnmu7HSfIXdblge?usp=drive_link' },
        { name: 'BEC101', type: 'zip', url: 'https://drive.google.com/drive/folders/1EAqUi6QAYsAFLl9MpZjbBIU7dMkC3EaP?usp=drive_link' },
        { name: 'BEC202', type: 'zip', url: 'https://drive.google.com/drive/folders/1Fy6t1VjoTZiBLaWgn4VbuA0gI8Yqkr3D?usp=drive_link' },
        { name: 'BAC101', type: 'zip', url: 'https://drive.google.com/drive/folders/1R0cmQpM13zBOplQY1zkgMhVXIageK43X?usp=drive_link' },
        { name: 'BAC202', type: 'zip', url: 'https://drive.google.com/drive/folders/1gLmDKlaECpIwOXWsyvlf_q9EEVdw-Oc_?usp=drive_link' },
        { name: 'GMA101', type: 'rar', url: 'https://drive.google.com/file/d/11QEUBuo0wLP5xPTAvz1iy3WKoKa1PzSD/view?usp=drive_link' },
        { name: 'IWB101', type: 'zip', url: 'https://drive.google.com/file/d/1g1JyKSyECOFTg747mF1pIMJdirRRmto5/view?usp=drive_link' },
        { name: 'IWB202', type: 'zip', url: 'https://drive.google.com/file/d/17DtKah_LrJCkx7kz7jM9N8ncBFoT4AWO/view?usp=drive_link' },
        { name: 'IWB303', type: 'zip', url: 'https://drive.google.com/file/d/1JrugiHtBcTid7PWfufa0Grd_vgD6YhLb/view?usp=drive_link' },
    ],
    tic: [
{ name: 'GBS101', type: 'zip', url: 'https://drive.google.com/file/d/1OMpM5Xv9znOG02hBpaL_Dowc9FZRLSli/view?usp=drive_link.zip' },
        { name: 'GBS102', type: 'zip', url: 'https://drive.google.com/file/d/1sOKmwdcY9zPhJzQHn8ZgXldpLeYEFsrq/view?usp=drive_link' },
        { name: 'GBS103', type: 'zip', url: 'https://drive.google.com/file/d/1cegYCLx2x3qlvFdyaJMhyIfYJbaYtNa0/view?usp=drive_link' },
        { name: 'GBS103 Slides', type: 'zip', url: 'https://drive.google.com/file/d/1iixfoPSh26V7_J0VjuL4vc6G-1O3XYep/view?usp=drive_link' },
        { name: 'GDE101', type: 'zip', url: 'https://drive.google.com/file/d/1UT_e0DSE8zB36VGZhHk44DGrHbntK8pR/view?usp=drive_link' },
        { name: 'GMA101', type: 'zip', url: 'https://drive.google.com/file/d/1ibX_hYYer0COQ5OK5WjqWemI82DKv6cw/view?usp=drive_link' },
        { name: 'IIS101', type: 'zip', url: 'https://drive.google.com/file/d/1aa1Yb0PEp8F0a-Mkv4eUOLH3v_su5vzJ/view?usp=drive_link' },
        { name: 'IIS201 PDF', type: 'zip', url: 'https://drive.google.com/file/d/19NYXNcbLyGprSNRkY397R3gXprimGhNa/view?usp=drive_link' },
        { name: 'IIS2101 Slides', type: 'zip', url: 'https://drive.google.com/file/d/1GEhsBhVoNmQMiLTQwrBBmjE9v3eWYLek/view?usp=drive_link' },
        { name: 'IIS202', type: 'zip', url: 'https://drive.google.com/file/d/1VOrzg3CbV9UgZNmARWUTpXzIdUXJI52c/view?usp=drive_link' },
        { name: 'IIS303', type: 'zip', url: 'https://drive.google.com/file/d/19KxJ2zoQFqo46K68Acb_HJvgAO-D2m-g/view?usp=drive_link' },
        { name: 'ITN101', type: 'zip', url: 'https://drive.google.com/file/d/1yolWh9EZ9QYrC07KMAAIclH0ckxao9oH/view?usp=drive_link' },
        { name: 'IOS101 Slides', type: 'zip', url: 'https://drive.google.com/file/d/1QN5lp6AE7OxoWEZFNOkIg8gZ9mnruR09/view?usp=drive_link' },
        { name: 'IOS101 PDF', type: 'zip', url: 'https://drive.google.com/file/d/1aWy6Y_v_9i1ztrLkdGdqERpWPzrcg761/view?usp=drive_link' },
        { name: 'IOS202', type: 'zip', url: 'https://drive.google.com/file/d/1TzL2zQL_SpiHH8HDTMZ7Mdmz6l1uGbFX/view?usp=drive_link' },
        { name: 'IOS203', type: 'zip', url: 'https://drive.google.com/file/d/1e-OzA9t-lSJ6Mp-dbSYqBXaCcJUFCwas/view?usp=drive_link' },
        { name: 'IPG101', type: 'zip', url: 'https://drive.google.com/file/d/1cHLTHvJv-GtcZpV31MqFd9WPjOZwcAIb/view?usp=drive_link' },
        { name: 'IPG201', type: 'zip', url: 'https://drive.google.com/file/d/1UmLqC9e9v8v30Q6Q82-MRDUvbApd7ePE/view?usp=drive_link' },
        { name: 'IPG202', type: 'zip', url: 'https://drive.google.com/file/d/1_-jI9CfFPJkA2jCXjLt9GKHuBvRDOJxz/view?usp=drive_link' },
        { name: 'IPG203 OOP', type: 'zip', url: 'https://drive.google.com/file/d/1bjE-cVUWnX8XRL4hhP0o7AMR6pRachER/view?usp=drive_link' },
        { name: 'IPG204', type: 'zip', url: 'https://drive.google.com/file/d/1KDg-vh7YBiiYOr14sYXe14colCy1JtBH/view?usp=drive_link' },
        { name: 'IWB101', type: 'zip', url: 'https://drive.google.com/file/d/1F0xEeW4nd4UU6pWcoeEorrhyp_U74uu3/view?usp=drive_link' },
        { name: 'IWB201', type: 'zip', url: 'https://drive.google.com/file/d/1hKz_iE0ljkegPw2dk1AnxBOVnP-iWtIP/view?usp=drive_link' },
        { name: 'IOS201', type: 'zip', url: 'https://drive.google.com/file/d/1dN-4wx4DwHraVXbBjjwpTnQgP3VZEU5-/view?usp=drive_link' },
        { name: 'GDE101', type: 'zip', url: 'https://drive.google.com/file/d/1JvPIr3010o4DyS21WwyxHHwEdBpUYbE2/view?usp=drive_link' },
    ],
};

// Save files to localStorage and notify pages to update
function saveFiles() {
    localStorage.setItem('files', JSON.stringify(files));
    notifyPageUpdate(); // Notify other pages to update
}

// Notify other pages to refresh
function notifyPageUpdate() {
    localStorage.setItem('filesUpdated', new Date().toISOString());
}

// Display files in the specified section
function displayFiles(section, filteredFiles) {
    const fileList = document.getElementById(`fileList${section.charAt(0).toUpperCase() + section.slice(1)}`);
    fileList.innerHTML = '';
    filteredFiles.forEach(file => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${file.name}</td>
            <td>${file.type.toUpperCase()}</td>
            <td><a href="${file.url}" ${section === 'bait' ? 'download' : 'target="_blank"'}>Download</a></td>
        `;
        fileList.appendChild(row);
    });
}

// Filter files based on type
function filterFiles(section, fileType) {
    const filteredFiles = fileType === 'all' ? files[section] : files[section].filter(file => file.type === fileType);
    displayFiles(section, filteredFiles);
}

// Search files by name
function searchFiles(section) {
    const searchInput = document.getElementById(`searchInput${section.charAt(0).toUpperCase() + section.slice(1)}`).value.toLowerCase();
    const filteredFiles = files[section].filter(file => file.name.toLowerCase().includes(searchInput));
    displayFiles(section, filteredFiles);
}

// Handle section form submission (Choose section)
document.getElementById('sectionForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const section = document.getElementById('section').value;
    
    // Navigate to the section page
    if (section) {
        window.location.href = section; // Use the value directly as the URL
    } else {
        alert('Please select a valid section.');
    }
});

// Handle admin login form submission
document.getElementById('adminLoginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('adminPassword').value.trim();
    
    if (password === 'adminpassword') {
        window.location.href = 'admin-home.html';
    } else {
        alert('Incorrect password');
    }
});

// Handle file form submission in Admin Home
document.getElementById('fileForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('fileName').value;
    const type = document.getElementById('fileType').value;
    const section = document.getElementById('fileSection').value;
    const url = document.getElementById('fileUrl').value;

    if (!files[section]) {
        files[section] = [];
    }

    files[section].push({ name, type, url });
    sortFilesByName(section); // Sort files after adding
    saveFiles();
    alert('File added successfully!');
    updateTable(section); // Refresh table with new file
});

// Sort files by name
function sortFilesByName(section) {
    files[section].sort((a, b) => a.name.localeCompare(b.name));
}

// Handle file removal
function removeFile(section, fileName) {
    if (section === 'all') {
        ['bait', 'tic'].forEach(sec => {
            files[sec] = files[sec].filter(file => file.name !== fileName);
        });
    } else {
        files[section] = files[section].filter(file => file.name !== fileName);
    }
    saveFiles();
    alert('File removed successfully!');
    updateTable(section); // Refresh table after removal
}

// Update file table based on the selected section
function updateTable(section) {
    const tableBody = document.getElementById('fileTableBody');
    tableBody.innerHTML = '';

    let filteredFiles = [];
    if (section === 'all') {
        filteredFiles = [...files['bait'], ...files['tic']]; // جمع الملفات من القسمين
    } else {
        filteredFiles = files[section] || [];
    }

    sortFilesByName(section); // Sort files before displaying

    filteredFiles.forEach(file => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${file.name}</td>
            <td>${file.type.toUpperCase()}</td>
            <td><a href="${file.url}" target="_blank">View</a></td>
            <td><button onclick="removeFile('${section}', '${file.name}')">Delete</button></td>
            <td><button onclick="editFile('${section}', '${file.name}')">Modify</button></td>
        `;
        tableBody.appendChild(row);
    });
}

let currentSection = '';
let currentFileName = '';

function editFile(section, fileName) {
    currentSection = section;
    currentFileName = fileName;

    // Show the modify modal
    document.getElementById('modifyFileModal').style.display = 'block';

    // Set the current name in the input field
    document.getElementById('newFileName').value = fileName;
}

document.getElementById('saveChanges')?.addEventListener('click', function() {
    const newFileName = document.getElementById('newFileName').value.trim();
    if (newFileName) {
        const fileList = files[currentSection];
        const file = fileList.find(f => f.name === currentFileName);
        if (file) {
            file.name = newFileName;
            sortFilesByName(currentSection); // Sort files after renaming
            saveFiles();
            updateTable(currentSection); // Refresh table with updated file
            document.getElementById('modifyFileModal').style.display = 'none'; // Hide modal
            alert('File name updated successfully!');
        }
    } else {
        alert('Please enter a new file name.');
    }
});

document.getElementById('cancelModify')?.addEventListener('click', function() {
    document.getElementById('modifyFileModal').style.display = 'none'; // Hide modal
});

// Listen for storage changes across different tabs/windows
window.addEventListener('storage', function(event) {
    if (event.key === 'filesUpdated') {
        location.reload(); // Reload the page to reflect updated files
    }
});

// Initial setup for displaying files on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.className;

    // For admin home page
    if (currentPage === 'admin-home-page') {
        const sectionFilter = document.querySelector('input[name="sectionFilter"]:checked');
        if (sectionFilter) {
            updateTable(sectionFilter.value);
        }
    } 

    // For TIC and BAIT pages
    else if (currentPage === 'tic-page' || currentPage === 'bait-page') {
        const section = currentPage.replace('-page', '');
        if (files[section]) {
            sortFilesByName(section); // Sort files before displaying
            displayFiles(section, files[section]);
        }
    }
});

// Check if DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Handle section form submission
    const sectionForm = document.getElementById("sectionForm");
    if (sectionForm) {
        sectionForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const selectedSection = document.getElementById("section").value;
            window.location.href = selectedSection;
        });
    }

    // Handle admin login form submission
    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const adminPassword = document.getElementById("adminPassword").value;
            const correctPassword = "adminpassword"; // Default admin password

            if (adminPassword === correctPassword) {
                window.location.href = "admin-home.html";
            } else {
                alert("Incorrect password");
            }
        });
    }

    // Handle file addition by admin
    const fileForm = document.getElementById("fileForm");
    if (fileForm) {
        fileForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const fileName = document.getElementById("fileName").value;
            const fileType = document.getElementById("fileType").value;
            const fileSection = document.getElementById("fileSection").value;
            const fileUrl = document.getElementById("fileUrl").value;

            if (!files[fileSection]) {
                files[fileSection] = [];
            }

            files[fileSection].push({ name: fileName, type: fileType, url: fileUrl });
            sortFilesByName(fileSection); // Sort files after adding
            saveFiles();
            alert("File added successfully!");
            fileForm.reset();
            updateTable(fileSection);
            notifyPageUpdate(); // Notify other pages of the update
        });
    }

    // Update table for file management
    function updateTable(section) {
        const files = JSON.parse(localStorage.getItem("files")) || [];
        const filteredFiles = section === 'all' ? files : files.filter(file => file.section === section);
        const tableBody = document.getElementById("fileTableBody");

        if (tableBody) {
            tableBody.innerHTML = "";
            filteredFiles.forEach((file, index) => {
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = file.name;
                row.appendChild(nameCell);

                const typeCell = document.createElement("td");
                typeCell.textContent = file.type;
                row.appendChild(typeCell);

                const urlCell = document.createElement("td");
                const link = document.createElement("a");
                link.href = file.url;
                link.textContent = "Download";
                link.target = "_blank";
                urlCell.appendChild(link);
                row.appendChild(urlCell);

                const actionsCell = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", function() {
                    files.splice(index, 1);
                    localStorage.setItem("files", JSON.stringify(files));
                    updateTable(section);
                    notifyPageUpdate(); // Notify other pages of the update
                });
                actionsCell.appendChild(deleteButton);
                row.appendChild(actionsCell);

                tableBody.appendChild(row);
            });
        }
    }

    // Notify other pages of updates
    function notifyPageUpdate() {
        localStorage.setItem('filesUpdated', new Date().toISOString());
    }

    // Display files for TIC and BAIT pages
    function displayFiles(section) {
        const files = JSON.parse(localStorage.getItem("files")) || [];
        const filteredFiles = files.filter(file => file.section === section);
        const fileList = document.getElementById(`fileList${section.charAt(0).toUpperCase() + section.slice(1)}`);

        if (fileList) {
            fileList.innerHTML = "";
            filteredFiles.forEach(file => {
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = file.name;
                row.appendChild(nameCell);

                const typeCell = document.createElement("td");
                typeCell.textContent = file.type;
                row.appendChild(typeCell);

                const urlCell = document.createElement("td");
                const link = document.createElement("a");
                link.href = file.url;
                link.textContent = "Download";
                link.target = "_blank";
                urlCell.appendChild(link);
                row.appendChild(urlCell);

                fileList.appendChild(row);
            });
        }
    }

    // Initial update based on current page
    const fileTableBody = document.getElementById("fileTableBody");
    if (fileTableBody) {
        const sectionFilter = document.querySelector('input[name="sectionFilter"]:checked');
        if (sectionFilter) {
            updateTable(sectionFilter.value);
        } else {
            updateTable("bait"); // Default to Bait section
        }
    }

    const currentPage = document.body.className;
    if (currentPage === 'tic-page' || currentPage === 'bait-page') {
        const section = currentPage.replace('-page', '');
        sortFilesByName(section); // Sort files before displaying
        displayFiles(section);
    }

    // Listen for updates from other pages
    window.addEventListener('storage', function(event) {
        if (event.key === 'filesUpdated') {
            if (currentPage === 'tic-page' || currentPage === 'bait-page') {
                const section = currentPage.replace('-page', '');
                sortFilesByName(section); // Sort files before displaying
                displayFiles(section);
            }
        }
    });
});

document.getElementById('finishButton')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});
