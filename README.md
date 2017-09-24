In my job as a labourer for the Maynooth Student's Union bar, we had a night similar to a Lock and Key night(all the girls get locks and all the guys get keys at the door and you have to find your match).

Our spin on it was that we would take a list of animals from <a>https://a-z-animals.com/animals/</a> and make QR codes for each animal using the QR Code creator website <a>http://www.3gvision.com/CreateBarcodes.html</a>. I was asked to do this all manually and it was estimated to take a lot of hours, but I created a content script for both these website to do my work for me.

I first printed all the animals names to consoles, and copy+pasted these into Sublime Text, and used that to clean it up(remove latin names, remove brackets) and format them into a javascript array.

I then had them programatically put into the QR Code creator and make a barcode for each of them.

We then printed two of each barcode onto stickers and we gave one sticker to a guy and one to a girl, and they had to use a QR code scanner to go around scanning the opposite sex until they ound their match and they could win prizes.
