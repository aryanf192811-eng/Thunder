const fs = require('fs');
const path = require('path');

// Configuration
const TOTAL_LESSONS = 29; // 19 JS Lectures + 10 Backend Days
const REPO_ROOT = path.join(__dirname, '..');
const README_PATH = path.join(REPO_ROOT, 'README.md');

// Function to check if a directory has code files (ignores .gitkeep)
function hasCodeFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === '.gitkeep') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isFile()) {
            return true;
        } else if (fs.statSync(fullPath).isDirectory()) {
            if (hasCodeFiles(fullPath)) return true;
        }
    }
    return false;
}

function updateReadme() {
    let completed = 0;
    
    // Check 02Javascript
    const jsDir = path.join(REPO_ROOT, '02Javascript');
    if (fs.existsSync(jsDir)) {
        const lectures = fs.readdirSync(jsDir);
        for (const lecture of lectures) {
            const lecturePath = path.join(jsDir, lecture);
            if (fs.statSync(lecturePath).isDirectory() && lecture.startsWith('Lecture')) {
                if (hasCodeFiles(lecturePath)) completed++;
            }
        }
    }

    // Check 03Backend
    const backendDir = path.join(REPO_ROOT, '03Backend');
    if (fs.existsSync(backendDir)) {
        const days = fs.readdirSync(backendDir);
        for (const day of days) {
            const dayPath = path.join(backendDir, day);
            if (fs.statSync(dayPath).isDirectory() && day.startsWith('Day')) {
                if (hasCodeFiles(dayPath)) completed++;
            }
        }
    }

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
