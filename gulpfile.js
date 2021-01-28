const gulp = require('gulp');
const child_process = require('child_process');
const exec = require('child_process').exec;
let httpServer;
let mockServerProcess;

gulp.task('mockserver:start', (done) => {
    mockServerProcess = child_process.spawn('npm', ['start'], {
        cwd: './mockserver'
    });
    mockServerProcess.stdout.on('data', (data) => {
        if ((data.toString().includes("Mockserver Started"))) {
            console.log(data.toString());
            done();
        } else if ((data.toString().includes("{"))) {
            console.log(data.toString());
        }
    }).on('close', () => {
        console.log('mockserver process closed');
        done();
    });

    return mockServerProcess;
});

gulp.task('webdriver-manager:update', (done) => {
    return child_process.spawn('npm', ['run', 'webdriver-manager:update'], {
        stdio: 'inherit'
    }).once('close', done);
});

gulp.task('protractor:run', gulp.series('webdriver-manager:update', (done) => {
    return child_process.spawn('npm', ['run', 'protractor:ci'], {
        stdio: 'inherit'
    }).once('close', done);
}));

gulp.task('build', (done) => {
    return child_process.spawn('npm',
        ['run', 'ng', 'build', '--', '--prod', '--progress=false', '--configuration', 'mockenv', '--output-hashing=none'], {
            stdio: 'inherit'
        }).once('close', done);
});

gulp.task('build:serve', gulp.series('build', (done) => {
    httpServer = child_process.spawn('npm', ['run', 'http-server']);
    httpServer.stdout.on('data', (data) => {
        if ((data.toString().includes("Visit http://localhost:4200 to view your app."))) {
            console.log(data.toString());
            done();
        }
    }).on('close', () => {
        console.log('build completed');
        done();
    });

    return httpServer;
}));

gulp.task('mockserver:shutdown', (done) => {
    return exec('curl -X PUT http://localhost:1080/stop', (err, stdout, sterr) => {
        done();
    });
})

gulp.task('build:serve:shutdown', (done) => {
    done();
    process.exit();
    return;
});

gulp.task('build:serve:e2e',
    gulp.series('mockserver:start', 'build:serve', 'protractor:run', 'mockserver:shutdown', 'build:serve:shutdown')
);
