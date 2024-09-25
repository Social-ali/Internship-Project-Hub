@echo off
setlocal

:: List of project directories
set PROJECTS=(
    "CMS"
    "QuizWhiz"
    "Hoobank"
    "WeatherWise"
    "Vibevault-mp"
)

:: Loop through each project directory
for %%p in %PROJECTS% do (
    echo Updating dependencies in %%~p
    cd %%~p

    :: Install npm-check-updates if not installed
    npm install -g npm-check-updates

    :: Update dependencies and install
    ncu -u
    npm install
    npm audit fix

    :: Return to main directory
    cd ..
)

echo All dependencies updated successfully!
endlocal

