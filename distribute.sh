#!/bin/bash

# Define the source directory where your .scss files are located
SOURCE_DIR="./dist"

# Define the load path
LOAD_PATH="--load-path=./"

# Find all the index.scss files within the source directory
SCSS_FILES=$(find "$SOURCE_DIR" -type f -name "index.scss")

# Loop through each found .scss file and compile it to .css
for SCSS_FILE in $SCSS_FILES; do
    # Get the directory name where the SCSS file is located (i.e., the :stylesheetname: folder)
    DIR_NAME=$(dirname "$SCSS_FILE")

    # Extract the :stylesheetname: from the directory path
    STYLESHEET_NAME=$(basename "$DIR_NAME")

    # Define the output directory where the compiled .css file will be saved
    OUTPUT_DIR="$DIR_NAME"

    # Compile the .scss file to .css using the sass CLI with the load path variable
    sass $LOAD_PATH "$SCSS_FILE" "$OUTPUT_DIR/style.css"
    sass $LOAD_PATH "$SCSS_FILE" "$OUTPUT_DIR/style.min.css" --style="compressed"

    # Print a message indicating the compilation result
    if [ $? -eq 0 ]; then
        echo "Compiled $SCSS_FILE to $OUTPUT_DIR/style.css"
    else
        echo "Error compiling $SCSS_FILE"
    fi
done

echo "Compilation completed."