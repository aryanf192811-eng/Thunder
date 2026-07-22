const fs = require('fs');
const path = require('path');

// Configuration
const TOTAL_LESSONS = 100;
const REPO_ROOT = path.join(__dirname, '..');
const README_PATH = path.join(REPO_ROOT, 'README.md');

function getCompletedLessons(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);

    for (const file of files) {
        // Skip node_modules, hidden folders, and scripts
        if (file === 'node_modules' || file.startsWith('.') || file === 'scripts') {
            continue;
        }

        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += getCompletedLessons(fullPath);
        } else if (file.endsWith('.js')) {
            count++;
        }
    }

    return count;
}

function updateReadme() {
    const completed = getCompletedLessons(REPO_ROOT);
    const percentage = Math.round((completed / TOTAL_LESSONS) * 100);
    
    // We use a badge from geps.dev to show a progress bar
    const progressText = `<!-- PROGRESS_START -->\n**${completed}** out of **${TOTAL_LESSONS}** lessons completed (${percentage}%)\n![Progress](https://geps.dev/progress/${percentage})\n<!-- PROGRESS_END -->`;

    let readme = fs.readFileSync(README_PATH, 'utf8');
    
    // Replace the existing progress section
    const updatedReadme = readme.replace(
        /<!-- PROGRESS_START -->[\s\S]*<!-- PROGRESS_END -->/,
        progressText
    );

    fs.writeFileSync(README_PATH, updatedReadme, 'utf8');
    console.log(`Updated README: ${completed}/${TOTAL_LESSONS} lessons completed.`);
}

updateReadme();
