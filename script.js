var css = ' *:not(.kztpV):not(.NhcAb):not(.oit-home-fonts):not(.oit-breadcrumb-left-fontz):not(i):not(.phpdebugbar-fa):not(.social):not(.filetypes):not(.halflings):not(.glyphicons):not(.glyphicon):not(.glyphicon-pro):not(.ring-font-icon):not([class*=icon]):not(.fal):not(.fab):not(.anchorjs-link):not(.icon):not(.fa):not(.fas):not(.far):not(.font-icon):not(.mega-octicon):not(.octicon):not(code){font-family:"OpenDyslexic" !important;} code{font-family:"OpenDyslexicMono"}';
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
