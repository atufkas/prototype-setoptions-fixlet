# prototype-setoptions.fixlet.js:

## Purpose

Re-adds ```Ajax.Base.setOptions()``` method to prototype base objects of libraries >= 1.7.0.
    
## Typical use case

There may be JS environments in the wild that have to make use of prototype library versions >= 1.7.0 
(e.g. in combination with scriptaculous >= 1.9.0 for IE compatibility reasons) but fail to behave 
correctly because legacy code extends prototype classes and makes use of the old ```setOptions()``` method 
originally provided by ```Ajax.Base.prototype```. 

Instead of refactoring the old code, this fixlet may help out as a quick fix.

## Usage

This can be used in a "fill-in" style, for example:

    <script src="/yourjsfolder/prototype-1.7.1.js" type="text/javascript" />
    <script src="/yourjsfolder/prototype-setoptions-fixlet.js" type="text/javascript" />

## Author

Matthias Lienau: <matthias@mlienau.de>

## License: 

MIT - http://www.opensource.org/licenses/mit-license.php
