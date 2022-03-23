// IMPORTS
import gulp from 'gulp';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';


// TASK FUNCTIONS
const test = (done) => {
    console.log("Test task running...");
    done();
}

const copy = (done) => {
    gulp.src("src/**/*.html").pipe(gulp.dest("dist/"));
    gulp.src("src/**/*.css").pipe(gulp.dest("dist/"));
    done();
}

const transpile = (done) => {
    gulp.src('src/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('./dist'));
    done();
}

const images = (done) => {
    gulp.src('src/images/**/*')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('dist/images/'));

    done();
}


// EXPORTS (in order to run the task functions, they must be exported)
export {test, copy, transpile, images}
export default gulp.parallel(copy, transpile, images);