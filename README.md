# prototype-setoptions.fixlet.js:

### Purpose

Re-adds ```Ajax.Base.setOptions()``` method to prototype base objects of libraries >= 1.7.0.
    
### Typical use case

There may exist legacy JS code in the wild that wants to make use of prototype library versions >= 1.7.0 
(e.g. in combination with scriptaculous >= 1.9.0 for IE compatibility reasons) but fails to behave 
correctly because custom code extends prototype classes and relies on the old ```setOptions()``` method 
originally provided ```Ajax.Base.prototype```. 

So, if you recently upgraded from prototype 1.5.x or scriptaculous 1.7.x to a later version and experience problems 
with your application: Instead of refactoring the old code, this one may help out as a quick fix.

### Usage

Just load the js as a "fill-in" additionally to loading prototype.js, for example:

    <script src="/yourjsfolder/prototype-1.7.1.js" type="text/javascript" />
    <script src="/yourjsfolder/prototype-setoptions-fixlet.js" type="text/javascript" />

### Author

Matthias Lienau: <matthias@mlienau.de>

Feel free to contact me on any question!

### License: 

MIT - http://www.opensource.org/licenses/mit-license.php
