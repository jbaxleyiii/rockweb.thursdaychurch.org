##NewSpring Rock Themes
---

To standardize our development of CSS across all of our web platforms, we are compiling our Rock themes locally on OS X using <a href="https://github.com/NewSpring/Norma" target="_blank">Norma</a>, and then copying the minified CSS files to our Rock VM.

The Rock styles directory is copied from the VM on compile to your mac.  This directory is also tracked in github so that we are aware of core style changes.

####Supported Compilation

- LESS
- SASS

####Requirements

- OS X connects to VM at the plugins directory
- All <a href="https://github.com/NewSpring/Norma" target="_blank">Norma</a> dependencies are installed

####Up and Running

        git clone https://github.com/NewSpring/rock-themes.git rock-themes
        
        cd ~/Sites/rock-themes
        
        norma
        
####Caveats

Due to the way that we are compiling when you create a new theme you will need to create a new copy task to copy the compiled theme CSS to the VM.

####Current Known Bugs

browser-sync is currently reloading the page rather than injecting the updated css.
