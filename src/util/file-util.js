var fs = require('fs');

/**
 * Util class for handling file interaction.
 */

/**
 * Creates a new File. This is a synchronous execution!
 *
 * @param filePath Path where the new file should be created.
 * @since 0.1.0
 * @author Maximilian Meier
 */
exports.createNewFile = function (filePath) {
    fs.writeFileSync(filePath, "", "utf-8");
}

/**
 * Opens a File. This is a synchronous execution!
 *
 * @param filePath Path where the file is stored.
 * @since 0.1.0
 * @author Maximilian Meier
 */
exports.openFile = function (filePath) {
    var file = fs.readFileSync(filePath, 'utf8');
    return file;
}
