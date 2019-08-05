# OpenDyslexicExtension
A web extension that allows one to force the open dyslexic font on any website while not overwriting most mainstream iconfonts.



## What and why?
Many dyslexic people use extensions that allow them to force the OpenDyslexic font and make websites easier to read. These extensions have one issue though: Websites that still rely on iconfonts to display icons. These will not work if you force your own font.

In order to combat this I've written a very simple extension that adds a css rule to any opened websites which specifies that all items excluding those that have a class name commonly associated with iconfonts should be displayed using the OpenDyslexic font.

This is something I bodged together in a few minutes to make my work life easier, since reading large amounts of text is very straining for me. It's not feature complete and if I find the time and spoons required I will update it to improve performance and customizability. For the moment though, it's still more useful than most extensions that force the font imo.



## Sounds cool, how can I use it?
Usage is pretty simple, although at the moment you are forced to change some security rules. If this attracts enough users, I might spend the 25$ it costs to submit to the chrome addon store to make it easier. At the moment you will have to follow these steps:

1. Install the OpenDyslexic fonts to your computer. (Guides and downloads to do that can be foud here: https://opendyslexic.wordpress.com/faq/)
2. Navigate to your brower's extension site. This is chrome://extensions on chromium based browsers. I have not tested the extension with firefox yet.
3. In the header enable "Developer mode"
4. Underneath the header there should now be a new bar that contains a few buttons. Hit the "load unpacked" one.
5. Select the location where you downloaded the content of this repo
6. Done. Reload any pages you want. Note: The extension will not work on some google pages because of the way chromium handles these. Sadly it doesn't seem to be possible to change this behaviour currently.
