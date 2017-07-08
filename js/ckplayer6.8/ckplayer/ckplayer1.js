/*

-------------------------------------------------------------------------

  ËµÃ÷:

  ckplayer6.3,ÓÐÎÊÌâÇë·ÃÎÊhttp://www.ckplayer.com

  Çë×¢Òâ£¬¸ÃÎÄ¼þÎªUTF-8±àÂë£¬²»ÐèÒª¸Ä±ä±àÂë¼´¿ÉÊ¹ÓÃÓÚ¸÷ÖÖ±àÂëÐÎÊ½µÄÍøÕ¾ÄÚ	

-------------------------------------------------------------------------

µÚÒ»²¿·Ö£¬¼ÓÔØ²å¼þ

ÒÔÏÂÎª¼ÓÔØµÄ²å¼þ²¿·Ý

²å¼þµÄÉèÖÃ²ÎÊýËµÃ÷£º

	1¡¢²å¼þÃû³Æ

	2¡¢Ë®Æ½¶ÔÆë·½Ê½£¨0×ó£¬1ÖÐ£¬2ÓÒ£©

	3¡¢´¹Ö±¶ÔÆë·½Ê½£¨0ÉÏ£¬1ÖÐ£¬2ÏÂ£©

	4¡¢Ë®Æ½·½ÏòÎ»ÖÃÆ«ÒÆÁ¿

	5¡¢´¹Ö±·½ÏòÎ»ÖÃÆ«ÒÆÁ¿

	6¡¢²å¼þµÄµÈ¼¶+ÊúÏß

	7¡¢²å¼þÊÇ·ñ°ó¶¨ÔÚ¿ØÖÆÀ¸ÉÏ£¬0²»°ó¶¨£¬1°ó¶¨£¬µ±ÖµÊÇ1µÄÊ±ºò¸Ã²å¼þ½«»áËæ×Å¿ØÖÆÀ¸Ò»ÆðÒþ²Ø»ò»º¶¯

	²å¼þÃû³Æ¾¡Á¿²»ÒªÏàÍ¬£¬¶Ô´ËµÄÏêÏ¸ËµÃ÷Çëµ½ÍøÕ¾²é¿´

*/

function ckcpt(){

    var cpt = '';

	//cpt += 'right.swf,2,1,-75,-100,2,0|';//ÓÒ±ß¿ª¹ØµÆ£¬µ÷Õû£¬·ÖÏí°´Å¥µÄ²å¼þ

	//cpt += 'share.swf,1,1,-180,-100,3,0|';//·ÖÏí²å¼þ

	//cpt += 'adjustment.swf,1,1,-180,-100,3,0|';//µ÷Õû´óÐ¡ºÍÑÕÉ«µÄ²å¼þ

    return cpt;

}

/*

²å¼þµÄ¶¨Òå½áÊø

ÒÔÏÂÊÇ¶Ô²¥·ÅÆ÷¹¦ÄÜ½øÐÐÅäÖÃ

*/

function ckstyle() { //¶¨Òå×ÜµÄ·ç¸ñ

    var ck = {

    cpath:'',

	/*

	²¥·ÅÆ÷·ç¸ñÑ¹Ëõ°üÎÄ¼þµÄÂ·¾¶£¬Ä¬ÈÏµÄÊÇstyle.swf

	Èç¹ûµ÷ÓÃ²»³öÀ´¿ÉÒÔÊÔ×ÅÉèÖÃ³É¾ø¶ÔÂ·¾¶ÊÔÊÔ

	Èç¹û²»ÖªµÀÂ·¾¶²¢ÇÒÊ¹ÓÃµÄÊÇÄ¬ÈÏÅäÖÃ£¬¿ÉÒÔÖ±½ÓÁô¿Õ£¬²¥·ÅÆ÷»á

	*/

	language:'',

	/*²¥·ÅÆ÷ËùÊ¹ÓÃµÄÓïÑÔÅäÖÃÎÄ¼þ£¬ÐèÒªºÍ²¥·ÅÆ÷ÔÚÍ¬Ä¿Â¼ÏÂ£¬Ä¬ÈÏÊÇlanguage.xml*/

	flashvars:'',

	/*

	ÕâÀïÊÇÓÃÀ´×öÎª¶ÔflashvarsÖµµÄ²¹³ä£¬³ýÁËcºÍx¶þ¸ö²ÎÊýÒÔÍâµÄÉèÖÃ¶¼¿ÉÒÔÔÚÕâÀï½øÐÐÅäÖÃ

	*/
	/**************5*********10**********15********20********25***********30********35***************/
	setup:'0,1,1,1,1,2,0,1,2,0,1,1,200,0,2,1,0,1,1,1,2,1,3,0,1,2,3000,0,0,0,1,1,1,1,1,1,1,250,0',

	/*

	ÕâÊÇÅäÖÃÎÄ¼þÀï±È½ÏÖØÒªµÄÒ»¸ö²ÎÊý£¬¹²ÓÐN¸ö¹¦ÄÜ¿ØÖÆ²ÎÊý£¬²¢ÇÒÒÔºó»á¼ÌÐøµÄÔö¼Ó£¬¸÷¿ØÖÆ²ÎÊýÒÔÓ¢ÎÄ¶ººÅ(,)¸ô¿ª¡£ÏÂÃæÁÐ³ö¸÷²ÎÊýµÄËµÃ÷£º

		1¡¢Êó±ê¾­¹ý°´Å¥ÊÇ·ñÊ¹ÓÃÊÖÐÍ£¬0ÆÕÍ¨Êó±ê£¬1ÊÖÐÍÊó±ê

		2¡¢ÊÇ·ñÖ§³Öµ¥»÷ÔÝÍ££¬0²»Ö§³Ö£¬1ÊÇÖ§³Ö

		3¡¢ÊÇ·ñÖ§³ÖË«»÷È«ÆÁ£¬0²»Ö§³Ö£¬1ÊÇÖ§³Ö

		4¡¢ÔÚ²¥·ÅÇ°ÖÃ¹ã¸æÊ±ÊÇ·ñÍ¬Ê±¼ÓÔØÊÓÆµ£¬0²»¼ÓÔØ£¬1¼ÓÔØ

		5¡¢¹ã¸æÏÔÊ¾µÄ²Î¿¼¶ÔÏó£¬0ÊÇ²Î¿¼ÊÓÆµÇøÓò£¬1ÊÇ²Î¿¼²¥·ÅÆ÷ÇøÓò

		6¡¢¹ã¸æ´óÐ¡µÄµ÷Õû·½Ê½,Ö»Õë¶ÔswfºÍÍ¼Æ¬ÓÐÐ§,ÊÓÆµÊÇ×Ô¶¯Ëõ·ÅµÄ

			=0ÊÇ×Ô¶¯µ÷Õû´óÐ¡£¬ÒâË¼ÊÇËµ´óµÄ»°¾Í±äÐ¡£¬Ð¡µÄ»°¾Í±ä´ó

			=1ÊÇ´óµÄ»¯±äÐ¡£¬Ð¡µÄ»°²»±ä

			=2ÊÇÊ²Ã´Ò²²»±ä£¬¾ÍÕâÃ´´ó

			=3ÊÇ¸ú²Î¿¼¶ÔÏñ(µÚ5¸ö¿ØÖÆ)²ÎÊýÉèÖÃµÄÒ»Ñù¿í¸ß

		7¡¢Ç°ÖÃ¹ã¸æ²¥·ÅË³Ðò£¬0ÊÇË³Ðò²¥·Å£¬1ÊÇËæ»ú²¥·Å

		8¡¢¶ÔÓÚÊÓÆµ¹ã¸æÊÇ·ñ²ÉÓÃÐÞÕý£¬0ÊÇ²»Ê¹ÓÃ£¬1ÊÇÊ¹ÓÃ£¬Èç¹ûÊÇ1£¬ÔòÓÃ»§ÔÚÍøËÙÂýµÄÇé¿öÏÂ»á°´Éè¶¨µÄµ¹¼ÆÊ±½øÐÐ²¥·Å¹ã¸æ£¬¼ÆÊ±½áÊøÔò·ÅÕýÆ¬£¨±È½ÏÈËÐÔ»¯£©£¬ÉèÖÃ³É0µÄ»°£¬ÔòÇ¿ÖÆ²¥·ÅÍê¹ã¸æ²ÅÄÜ²¥·ÅÕýÆ¬

		9¡¢ÊÇ·ñ¿ªÆô¹ö¶¯ÎÄ×Ö¹ã¸æ£¬0ÊÇ²»¿ªÆô£¬1ÊÇ¿ªÆôÇÒ²»Ê¹ÓÃ¹Ø±Õ°´Å¥£¬2ÊÇ¿ªÆô²¢ÇÒÊ¹ÓÃ¹Ø±Õ°´Å¥£¬¿ªÆôºó½«ÔÚ¼ÓÔØÊÓÆµµÄÊ±ºò¼ÓÔØ¹ö¶¯ÎÄ×Ö¹ã¸æ

		10¡¢ÊÓÆµµÄµ÷Õû·½Ê½

			=0ÊÇ×Ô¶¯µ÷Õû´óÐ¡£¬ÒâË¼ÊÇËµ´óµÄ»°¾Í±äÐ¡£¬Ð¡µÄ»°¾Í±ä´ó£¬Í¬Ê±±£³Ö³¤¿í±ÈÀý²»±ä

			=1ÊÇ´óµÄ»¯±äÐ¡£¬Ð¡µÄ»°²»±ä

			=2ÊÇÊ²Ã´Ò²²»±ä£¬¾ÍÕâÃ´´ó

			=3ÊÇ¸ú²Î¿¼¶ÔÏñ(pm_videoµÄÉèÖÃ)²ÎÊýÉèÖÃµÄÒ»Ñù¿í¸ß

		11¡¢ÊÇ·ñÔÚ¶àÊÓÆµÊ±·Ö¶Î¼ÓÔØ£¬0²»ÊÇ£¬1ÊÇ

		12¡¢Ëõ·ÅÊÓÆµÊ±ÊÇ·ñ½øÐÐÆ½»¬´¦Àí£¬0²»ÊÇ£¬1ÊÇ

		13¡¢ÊÓÆµ»º³åÊ±¼ä,µ¥Î»£ººÁÃë,½¨Òé²»³¬¹ý300

		14¡¢³õÊ¼Í¼Æ¬µ÷Õû·½Ê½(

			=0ÊÇ×Ô¶¯µ÷Õû´óÐ¡£¬ÒâË¼ÊÇËµ´óµÄ»°¾Í±äÐ¡£¬Ð¡µÄ»°¾Í±ä´ó£¬Í¬Ê±±£³Ö³¤¿í±ÈÀý²»±ä

			=1ÊÇ´óµÄ»¯±äÐ¡£¬Ð¡µÄ»°²»±ä

			=2ÊÇÊ²Ã´Ò²²»±ä£¬¾ÍÕâÃ´´ó

			=3ÊÇ¸úpm_video²ÎÊýÉèÖÃµÄÒ»Ñù¿í¸ß

		15¡¢ÔÝÍ£¹ã¸æµ÷Õû·½Ê½(

			=0ÊÇ×Ô¶¯µ÷Õû´óÐ¡£¬ÒâË¼ÊÇËµ´óµÄ»°¾Í±äÐ¡£¬Ð¡µÄ»°¾Í±ä´ó£¬Í¬Ê±±£³Ö³¤¿í±ÈÀý²»±ä

			=1ÊÇ´óµÄ»¯±äÐ¡£¬Ð¡µÄ»°²»±ä

			=2ÊÇÊ²Ã´Ò²²»±ä£¬¾ÍÕâÃ´´ó

			=3ÊÇ¸úpm_video²ÎÊýÉèÖÃµÄÒ»Ñù¿í

		16¡¢ÔÝÍ£¹ã¸æÊÇ·ñÊ¹ÓÃ¹Ø±Õ¹ã¸æÉèÖÃ£¬0²»Ê¹ÓÃ£¬1Ê¹ÓÃ

		17¡¢»º³åÊ±ÊÇ·ñ²¥·Å¹ã¸æ£¬0ÊÇ²»ÏÔÊ¾£¬1ÊÇÏÔÊ¾²¢Í¬Ê±Òþ²Øµô»º³åÍ¼±êºÍ½ø¶È£¬2ÊÇÏÔÊ¾²¢²»Òþ²Ø»º³åÍ¼±ê

		18¡¢ÊÇ·ñÖ§³Ö¼üÅÌ¿Õ¸ñ¼ü¿ØÖÆ²¥·ÅºÍÔÝÍ£0²»Ö§³Ö£¬1Ö§³Ö

		19¡¢ÊÇ·ñÖ§³Ö¼üÅÌ×óÓÒ·½Ïò¼ü¿ØÖÆ¿ì½ø¿ìÍË0²»Ö§³Ö£¬1Ö§³Ö

		20¡¢ÊÇ·ñÖ§³Ö¼üÅÌÉÏÏÂ·½Ïò¼ü¿ØÖÆÒôÁ¿0²»Ö§³Ö£¬1Ö§³Ö

		21¡¢²¥·ÅÆ÷·µ»Øjs½»»¥º¯ÊýµÄµÈ¼¶£¬0-2,µÈ¼¶Ô½¸ß£¬·µ»ØµÄ²ÎÊýÔ½¶à

			0ÊÇ·µ»ØÉÙÁ¿³£ÓÃ½»»¥

			1·µ»Ø²¥·ÅÆ÷ÔÚ²¥·ÅµÄÊ±ºòµÄ²ÎÊý£¬²»·µ»Ø¹ã¸æÖ®ÀàµÄ²ÎÊý

			2·µ»ØÈ«²¿²ÎÊý

			3·µ»ØÈ«²¿²ÎÊý£¬²¢ÇÒÔÚ²ÎÊýÇ°¼ÓÉÏ"²¥·ÅÆ÷ID->"£¬ÓÃÓÚ¶à²¥·ÅÆ÷µÄ¼àÌý

		22¡¢¿ì½øºÍ¿ìÍËµÄÃëÊý

		23¡¢½çÃæÉÏÍ¼Æ¬ÔªËØ¼ÓÔØÊ§°ÜÖØÐÂ¼ÓÔØ´ÎÊý

		24¡¢¿ªÆô¼ÓÔØÆ¤·ôÑ¹ËõÎÄ¼þ°üµÄ¼ÓÔØ½ø¶ÈÌáÊ¾

		25¡¢Ê¹ÓÃÒþ²Ø¿ØÖÆÀ¸Ê±ÏÔÊ¾¼òµ¥½ø¶ÈÌõµÄ¹¦ÄÜ,0ÊÇ²»Ê¹ÓÃ£¬1ÊÇÊ¹ÓÃ£¬2ÊÇÖ»ÔÚÆÕÍ¨×´Ì¬ÏÂÊ¹ÓÃ

		26¡¢¿ØÖÆÀ¸Òþ²ØÉèÖÃ(0²»Òþ²Ø£¬1È«ÆÁÊ±Òþ²Ø£¬2¶¼Òþ²Ø

		27¡¢¿ØÖÆÀ¸Òþ²ØÑÓÊ±Ê±¼ä£¬¼´ÔÚÊó±êÀë¿ª¿ØÖÆÀ¸ºó¶àÉÙºÁÃëºóÒþ²Ø¿ØÖÆÀ¸

		28¡¢×óÓÒ¹ö¶¯Ê±ÊÇ·ñ²ÉÓÃÎÞ·ì£¬Ä¬ÈÏ0²ÉÓÃ£¬1ÊÇ²»²ÉÓÃ

		29¡¢0ÊÇÕý³£×´Ì¬£¬1ÊÇ¿ØÖÆÀ¸Ä¬ÈÏÒþ²Ø£¬²¥·Å×´Ì¬ÏÂÊó±ê¾­¹ý²¥·ÅÆ÷ÏÔÊ¾¿ØÖÆÀ¸£¬2ÊÇÒ»Ö±Òþ²Ø¿ØÖÆÀ¸

		30¡¢ÔÚ²¥·ÅrtmpÊÓÆµÊ±ÔÝÍ£ºóµã»÷²¥·ÅÊÇ·ñ²ÉÓÃÖØÐÂÁ´½ÓµÄ·½Ê½,ÕâÀïÒ»¹²·Ö0-3ËÄ¸öµÈ¼¶

		31¡¢½ø¶ÈÌõÊÇ·ñ²ÉÓÃÇ°¶ËÓÅ»¯£¬Ä¬ÈÏ0²»²ÉÓÃ£¬1ÊÇ²ÉÓÃ£¬¼´¼ÓÔØ½ø¶È²»¸úËæÊµ¼Ê½ø¶È£¬¶øÊÇÕ¹ÏÖ¸øÓÃ»§Ò»¸ö±È½ÏÁ÷³©µÄ¸Ð¾õ

		32¡¢ÊÇ·ñÆôÓÃ²¥·Å°´Å¥ºÍÔÝÍ£°´Å¥

		33¡¢ÊÇ·ñÆôÓÃÖÐ¼äÔÝÍ£°´Å¥

		34¡¢ÊÇ·ñÆôÓÃ¾²Òô°´Å¥

		35¡¢ÊÇ·ñÆôÓÃÈ«ÆÁ°´Å¥

		36¡¢ÊÇ·ñÆôÓÃ½ø¶Èµ÷½ÚÀ¸

		37¡¢ÊÇ·ñÆôÓÃµ÷½ÚÒôÁ¿

		38¡¢¼ÆËãÊ±¼äµÄ¼ä¸ô£¬ºÁÃë

		39¡¢Ç°ÖÃlogoÖÁÉÙÏÔÊ¾µÄÊ±¼ä£¬µ¥Î»£ººÁÃë

	*/

	pm_bg:'0x000000,100,230,180',

	/*²¥·ÅÆ÷ÕûÌåµÄ±³¾°ÅäÖÃ£¬Çë×¢Òâ£¬ÕâÀïÖ»ÊÇÒ»¸ö³õÊ¼»¯µÄÉèÖÃ£¬Èç¹ûÐèÒªÕæÕýµÄ¸Ä¶¯²¥·ÅÆ÷µÄ±³¾°ºÍ×îÐ¡¿í¸ß£¬ÐèÒªÔÚ·ç¸ñÎÄ¼þÀïÕÒµ½ÏàÍ¬µÄ²ÎÊý½øÐÐ¸ü¸Ä¡£

		1¡¢ÕûÌå±³¾°ÑÕÉ«

		2¡¢±³¾°Í¸Ã÷¶È

		3¡¢²¥·ÅÆ÷×îÐ¡¿í¶È

		4¡¢²¥·ÅÆ÷×îÐ¡¸ß¶È

	*/

	mylogo:'null',

	/*

	ÊÓÆµ¼ÓÔØÇ°ÏÔÊ¾µÄlogoÎÄ¼þ£¬²»Ê¹ÓÃÉèÖÃ³Énull£¬¼´ck.mylogo='null';

	*/

	pm_mylogo:'1,1,-100,-55',

	/*

	ÊÓÆµ¼ÓÔØÇ°ÏÔÊ¾µÄlogoÎÄ¼þ(mylogo²ÎÊýµÄ)µÄÎ»ÖÃ

	±¾Èí¼þËùÓÐµÄËÄ¸ö²ÎÊý¿ØÖÆÎ»ÖÃµÄ·½Ê½È«²¿¶¼ÊÇÍ³Ò»µÄÒâË¼£¬ÈçÏÂ

		1¡¢Ë®Æ½¶ÔÆë·½Ê½£¬0ÊÇ×ó£¬1ÊÇÖÐ£¬2ÊÇÓÒ

		2¡¢´¹Ö±¶ÔÆë·½Ê½£¬0ÊÇÉÏ£¬1ÊÇÖÐ£¬2ÊÇÏÂ

		3¡¢Ë®Æ½Æ«ÒÆÁ¿£¬¾ÙÀýËµÃ÷£¬Èç¹ûµÚ1¸ö²ÎÊýÉèÖÃ³É0×ó¶ÔÆë£¬µÚ3¸öÆ«ÒÆÁ¿ÉèÖÃ³É10£¬¾ÍÊÇÀë×ó±ß10¸öÏñËØ£¬µÚÒ»¸ö²ÎÊýÉèÖÃ³É2£¬Æ«ÒÆÁ¿Èç¹ûÉèÖÃµÄÊÇÕýÖµ¾Í»áÒÆµ½²¥·ÅÆ÷ÍâÃæ£¬Ö»ÓÐÉèÖÃ³É¸ºÖµ²ÅÐÐ£¬ÉèÖÃ³É-1£¬°´Å¥¾Í»áÅÜµ½²¥·ÅÆ÷ÍâÃæ

		4¡¢´¹Ö±Æ«ÒÆÁ¿ 

	*/

	logo:'null',

	/*

	Ä¬ÈÏÓÒÉÏ½ÇÒ»Ö±ÏÔÊ¾µÄlogo£¬²»Ê¹ÓÃÉèÖÃ³Énull£¬¼´ck.logo='null';

	*/

	pm_logo:'2,0,-100,20',

	/*

	²¥·ÅÆ÷ÓÒÉÏ½ÇµÄlogoµÄÎ»ÖÃ

		1¡¢Ë®Æ½¶ÔÆë·½Ê½£¬0ÊÇ×ó£¬1ÊÇÖÐ£¬2ÊÇÓÒ

		2¡¢´¹Ö±¶ÔÆë·½Ê½£¬0ÊÇÉÏ£¬1ÊÇÖÐ£¬2ÊÇÏÂ

		3¡¢Ë®Æ½Æ«ÒÆÁ¿

		4¡¢´¹Ö±Æ«ÒÆÁ¿ 

	ÒÔÏÂÊÇ²¥·ÅÆ÷×Ô´øµÄ¶þ¸ö²å¼þ

	*/

	control_rel:'related.swf,/ckplayer/related.xml,0',

	/*

	ÊÓÆµ½áÊøÏÔÊ¾¾«²ÊÊÓÆµµÄ²å¼þ

		1¡¢ÊÓÆµ²¥·Å½áÊøºóÏÔÊ¾Ïà¹Ø¾«²ÊÊÓÆµµÄ²å¼þÎÄ¼þ£¨×¢Òâ£¬ÊÓÆµ½áÊø¶¯×÷ÉèÖÃ³É3Ê±(¼´var flashvars={e:3})ÓÐÐ§£©£¬

		2¡¢xmlÎÄ¼þÊÇµ÷ÓÃ¾«²ÊÊÓÆµµÄÊ¾ÀýÎÄ¼þ£¬¿ÉÒÔ×Ô¶¨ÒåÎÄ¼þÀàÐÍ£¨±ÈÈçasp,php,jsp,.netÖ»ÒªÊä³öµÄÊÇxml¸ñÊ½¾ÍÐÐ£©,Êµ¼ÊÊ¹ÓÃÖÐÒ»¶¨Òª×¢ÒâµÚ¶þ¸ö²ÎÊýµÄÂ·¾¶ÒªÕýÈ·

		3¡¢µÚÈý¸ö²ÎÊýÊÇÉèÖÃÅäÖÃÎÄ¼þµÄ±àÂë£¬0ÊÇÄ¬ÈÏµÄutf-8,1ÊÇgbk2312 

	*/

	control_pv:'Preview.swf,105,2000',

	/*

	ÊÓÆµÔ¤ÀÀ²å¼þ

		1¡¢²å¼þÎÄ¼þÃû³Æ(¸Ã²å¼þºÍÉÏÃæµÄ¾«²ÊÊÓÆµµÄ²å¼þ¶¼ÊÇ·ÅÔÚ·ç¸ñÑ¹Ëõ°üÀïµÄ)

		2¡¢Àë½ø¶ÈÀ¸µÄ¸ß(Ö¸µÄÊÇ²å¼þµÄ¶¥²¿Àë½ø¶ÈÀ¸µÄÎ»ÖÃ)

		3¡¢ÑÓ³ÙÊ±¼ä(¸Ã´¦ÉèÖÃÊó±ê¾­¹ý½ø¶ÈÀ¸Í£¶Ù¶àÉÙºÁÃëºó²ÅÏÔÊ¾²å¼þ)

		½¨ÒéÒ»¶¨ÒªÉèÖÃÑÓÊ±Ê±¼ä£¬²»È»µ±Êó±êÔÚ½ø¶ÈÀ¸ÉÏ»®¹ýµÄÊ±ºò¾Í»á¶ÁÈ¡ÊÓÆµµØÖ·½øÐÐÔ¤ÀÀ£¬ºÜÕ¼×ÊÔ´ 

	*/

	pm_repc:'',

	/*

	ÊÓÆµµØÖ·Ìæ»»·û£¬¸Ã¹¦ÄÜÖ÷ÒªÊÇÓÃÀ´×ö¼òµ¥¼ÓÃÜµÄ¹¦ÄÜ£¬Ê¹ÓÃ·½·¨ºÜ¼òµ¥£¬Çë×¢Òâ£¬Ö»Õë¶ÔfÖµÊÇÊÓÆµµØÖ·µÄÊ±ºòÓÐÐ§£¬ÆäËüµØ·½²»ÄÜÊ¹ÓÃ¡£¾ßÌåµÄÇë²é¿´http://www.ckplayer.com/manual.php?id=4#title_25

	*/

	pm_spac:'|',

	/*

	ÊÓÆµµØÖ·¼ä¸ô·û£¬ÕâÀïÖ÷ÒªÊÇ²¥·Å¶à¶ÎÊÓÆµÊ±Ê¹ÓÃÆÕÍ¨µ÷ÓÃ·½Ê½»òÍøÖ·µ÷ÓÃ·½Ê½Ê±Ê¹ÓÃµÄ¡£Ä¬ÈÏÊ¹ÓÃ|£¬Èç¹ûÊÓÆµµØÖ·Àï±¾Éí´æÔÚ|µÄ»°ÐèÒªÁíÍâÉèÖÃÒ»¸ö¼ä¸ô·û£¬×¢Òâ£¬¼´Ê¹Ö»ÓÐÒ»¸öÊÓÆµÒ²ÐèÒªÉèÖÃ¡£ÁíÍâÔÚÊ¹ÓÃrtmpÐ­Òé²¥·ÅÊÓÆµµÄÊ±ºò£¬Èç¹ûÊÓÆµ´æÔÚ¶à¼¶Ä¿Â¼µÄ»°£¬ÕâÀïÒª¸Ä³ÉÆäËüµÄ·ûºÅ£¬ÒòÎªrtmpÐ­ÒéµÄÊÓÆµµØÖ·¶à¼¶µÄ»°Ò²ÐèÒªÓÃµ½|¸ô¿ªÁ÷µØÖ·ºÍÊµÀýµØÖ· 

	*/

	pm_fpac:'file->f',

	/*

	¸Ã²ÎÊýµÄ¹¦ÄÜÊÇ°Ñ×Ô¶¨ÒåµÄflashvarsÀïµÄ±äÁ¿Ìæ»»³ÉckplayerÀï¶ÔÓ¦µÄ±äÁ¿£¬Ä¬ÈÏµÄ²ÎÊýµÄÒâË¼ÊÇ°ÑflashvarsÀïµÄfileÖµÌæ»»³ÉfÖµ£¬ÒòÎªckplayerÀïÖ»ÈÏfÖµ£¬¶à¸öÌæ»»Ö®¼äÓÃÊúÏß¸ô¿ª

	*/

	pm_advtime:'2,0,-110,10,0,300,0',

	/*

	Ç°ÖÃ¹ã¸æµ¹¼ÆÊ±ÎÄ±¾Î»ÖÃ£¬²¥·ÅÇ°ÖÃ ¹ã¸æÊ±ÓÐ¸öµ¹¼ÆÊ±µÄÏÔÊ¾ÎÄ±¾¿ò£¬ÕâÀïÊÇÉèÖÃ¸ÃÎÄ±¾¿òµÄÎ»ÖÃºÍ¿í¸ß£¬¶ÔÆë·½Ê½µÄ¡£Ò»¹²7¸ö²ÎÊý£¬·Ö±ð±íÊ¾£º

		1¡¢Ë®Æ½¶ÔÆë·½Ê½£¬0ÊÇ×ó¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇÓÒ¶ÔÆë

		2¡¢´¹Ö±¶ÔÆë·½Ê½£¬0ÊÇÉÏ¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇµÍ²¿¶ÔÆë

		3¡¢Ë®Æ½Î»ÖÃÆ«ÒÆÁ¿

		4¡¢´¹Ö±Î»ÖÃÆ«ÒÆÁ¿

		5¡¢ÎÄ×Ö¶ÔÆë·½Ê½£¬0ÊÇ×ó¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇÓÒ¶ÔÆë£¬3ÊÇÄ¬ÈÏ¶ÔÆë

		6¡¢ÎÄ±¾¿ò¿íÏ¯

		7¡¢ÎÄ±¾¿ò¸ß¶È 

	*/

	pm_advstatus:'1,2,2,-200,-40',

	/*

	Ç°ÖÃ¹ã¸æ¾²Òô°´Å¥£¬¾²Òô°´Å¥Ö»ÔÚÊÇÊÓÆµ¹ã¸æÊ±ÏÔÊ¾£¬µ±È»Ò²¿ÉÒÔ¿ØÖÆ²»ÏÔÊ¾ 

		1¡¢ÊÇ·ñÏÔÊ¾0²»ÏÔÊ¾£¬1ÏÔÊ¾

		2¡¢Ë®Æ½¶ÔÆë·½Ê½

		3¡¢´¹Ö±¶ÔÆë·½Ê½

		4¡¢Ë®Æ½Æ«ÒÆÁ¿

		5¡¢´¹Ö±Æ«ÒÆÁ¿

	*/

	pm_advjp:'1,1,2,2,-100,-40',

	/*

	Ç°ÖÃ¹ã¸æÌø¹ý¹ã¸æ°´Å¥µÄÎ»ÖÃ

		1¡¢ÊÇ·ñÏÔÊ¾0²»ÏÔÊ¾£¬1ÊÇÏÔÊ¾

		2¡¢Ìø¹ý°´Å¥´¥·¢¶ÔÏó(Öµ0/1,0ÊÇÖ±½ÓÌø×ª,1ÊÇ´¥·¢js:function ckadjump(){})

		3¡¢Ë®Æ½¶ÔÆë·½Ê½

		4¡¢´¹Ö±¶ÔÆë·½Ê½

		5¡¢Ë®Æ½Æ«ÒÆÁ¿

		6¡¢´¹Ö±Æ«ÒÆÁ¿

	*/

	pm_padvc:'2,0,-10,-10',

	/*

	ÔÝÍ£¹ã¸æµÄ¹Ø±Õ°´Å¥µÄÎ»ÖÃ

		1¡¢Ë®Æ½¶ÔÆë·½Ê½

		2¡¢´¹Ö±¶ÔÆë·½Ê½

		3¡¢Ë®Æ½Æ«ÒÆÁ¿

		4¡¢´¹Ö±Æ«ÒÆÁ¿

	*/

	pm_advms:'2,2,-46,-56',

	/*

	¹ö¶¯¹ã¸æ¹Ø±Õ°´Å¥Î»ÖÃ

		1¡¢Ë®Æ½¶ÔÆë·½Ê½

		2¡¢´¹Ö±¶ÔÆë·½Ê½

		3¡¢Ë®Æ½Æ«ÒÆÁ¿

		4¡¢´¹Ö±Æ«ÒÆÁ¿

	*/

	pm_zip:'1,1,-20,-8,1,0,0',

	/*

	¼ÓÔØÆ¤·ôÑ¹Ëõ°üÊ±ÌáÊ¾ÎÄ×ÖµÄÎ»ÖÃ

		1¡¢Ë®Æ½¶ÔÆë·½Ê½£¬0ÊÇ×ó¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇÓÒ¶ÔÆë

		2¡¢´¹Ö±¶ÔÆë·½Ê½£¬0ÊÇÉÏ¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇµÍ²¿¶ÔÆë

		3¡¢Ë®Æ½Î»ÖÃÆ«ÒÆÁ¿

		4¡¢´¹Ö±Î»ÖÃÆ«ÒÆÁ¿

		5¡¢ÎÄ×Ö¶ÔÆë·½Ê½£¬0ÊÇ×ó¶ÔÆë£¬1ÊÇÖÐ¼ä¶ÔÆë£¬2ÊÇÓÒ¶ÔÆë£¬3ÊÇÄ¬ÈÏ¶ÔÆë

		6¡¢ÎÄ±¾¿ò¿íÏ¯

		7¡¢ÎÄ±¾¿ò¸ß¶È

	*/

	pm_advmarquee:'1,2,50,-60,50,18,0,0x000000,50,0,20,1,15,2000',

	/*

	¹ö¶¯¹ã¸æµÄ¿ØÖÆ£¬ÒªÊ¹ÓÃµÄ»°ÐèÒªÔÚsetupÀïµÄµÚ9¸ö²ÎÊýÉèÖÃ³É1

	ÕâÀï·Ö¶þÖÖÇé¿ö,Ç°Áù¸ö²ÎÊýÊÇ¶¨Î»¿ØÖÆ£¬µÚ7¸ö²ÎÊýÊÇÉèÖÃ¶¨Î»·½Ê½(0£ºÏà¶Ô¶¨Î»£¬1£º¾ø¶Ô¶¨Î»)

	µÚÒ»ÖÖÇé¿ö£ºµÚ7¸ö²ÎÊýÊÇ0µÄÊ±ºò£¬Ïà¶Ô¶¨Î»£¬¾ÍÊÇ²¥·ÅÆ÷³¤¿í±ä»¯µÄÊ±ºò£¬¿ØÖÆÀ¸Ò²¸ú×Å±ä

		1¡¢Ä¬ÈÏ1:ÖÐ¼ä¶ÔÆë

		2¡¢ÉÏÖÐÏÂ¶ÔÆë£¨0ÊÇÉÏ£¬1ÊÇÖÐ£¬2ÊÇÏÂ£©

		3¡¢Àë×ó±ßµÄ¾àÀë

		4¡¢YÖáÆ«ÒÆÁ¿

		5¡¢ÀëÓÒ±ßµÄ¾àÀë

		6¡¢¸ß¶È

		7¡¢¶¨Î»·½Ê½

	µÚ¶þÖÖÇé¿ö£ºµÚ7¸ö²ÎÊýÊÇ1µÄÊ±ºò£¬¾ø¶Ô¶¨Î»£¬¾ÍÊÇ²¥·ÅÆ÷³¤¿í±ä»¯µÄÊ±ºò£¬¿ØÖÆÀ¸²»¸ú×Å±ä£¬ÕâÖÖ·½Ê½Ò»°ãÊ¹ÓÃÔÚ¿ØÖÆÀ¸´óÐ¡²»±äµÄÊ±ºò

		1¡¢×óÖÐÓÒ¶ÔÆë·½Ê½£¨0ÊÇ×ó£¬1ÊÇÖÐ¼ä£¬2ÊÇÓÒ£©

		2¡¢ÉÏÖÐÏÂ¶ÔÆë£¨0ÊÇÉÏ£¬1ÊÇÖÐ£¬2ÊÇÏÂ£©

		3¡¢xÆ«ÒÆÁ¿

		4¡¢yÆ«ÒÆÁ¿

		5¡¢¿í¶È

		6¡¢¸ß¶È

		7¡¢¶¨Î»·½Ê½

	ÒÔÉÏÊÇÇ°7¸ö²ÎÊýµÄ×÷ÓÃ

		8¡¢ÊÇÎÄ×Ö¹ã¸æµÄ±³¾°É«

		9¡¢ÖÃ±³¾°É«µÄÍ¸Ã÷¶È

		10¡¢¿ØÖÆ¹ö¶¯·½Ïò£¬0ÊÇË®Æ½¹ö¶¯£¨°üÀ¨×óÓÒ£©£¬1ÊÇÉÏÏÂ¹ö¶¯£¨°üÀ¨ÏòÉÏºÍÏòÏÂ£©

		11¡¢ÒÆ¶¯µÄµ¥Î»Ê±³¤£¬¼´ÒÆ¶¯µ¥Î»ÏñËØËùÐèÒªµÄÊ±³¤£¬ºÁÃë

		12¡¢ÒÆ¶¯µÄµ¥Î»ÏñËØ,ÕýÊýÍ¬×ó/ÉÏ£¬¸ºÊýÏòÓÒ/ÏÂ

		13¡¢ÊÇÐÐ¸ß£¬Õâ¸öÔÚÉèÖÃÏòÉÏ»òÏòÏÂ¹ö¶¯µÄÊ±ºòÓÐÓÃ´¦

		14¡¢¿ØÖÆÏòÉÏ»òÏòÏÂ¹ö¶¯Ê±Ã¿´ÎÍ£Ö¹µÄÊ±¼ä

	*/

	advmarquee:escape(''),

	/*

	¸Ã´¦ÊÇ¹ö¶¯ÎÄ×Ö¹ã¸æµÄÄÚÈÝ£¬Èç¹û²»ÏëÔÚÕâÀïÉèÖÃ£¬¾Í°ÑÕâÀïÇå¿Õ²¢ÇÒÔÚÒ³ÃæÖÐÊ¹ÓÃjsµÄº¯Êý¶¨Òåfunction ckmarqueeadv(){return '¹ã¸æÄÚÈÝ'}

	*/

	myweb:escape(''),

	/*

	------------------------------------------------------------------------------------------------------------------

	ÒÔÏÂÄÚÈÝ²¿·ÝÊÇºÍ²å¼þÏà¹ØµÄÅäÖÃ£¬Çë×¢Òâ£¬×Ô¶¨Òå²å¼þÒÔ¼°ÆäÅäÖÃµÄÃüÃû·½Ê½Òª×¢Òâ£¬²»ÒªºÍÏµÍ³µÄÏàÖØ¸´£¬²»È»¾Í»áÌæ»»µôÏµÍ³µÄÏà¹ØÉèÖÃ£¬É¾³ýÏà¹Ø²å¼þµÄ»°Ò²¿ÉÒÔÍ¬Ê±É¾³ýÏà¹ØµÄÅäÖÃ

	------------------------------------------------------------------------------------------------------------------

	ÒÔÏÂÄÚÈÝ¶¨Òå×Ô¶¨Òå²å¼þµÄÏà¹ØÅäÖÃ£¬ÕâÀïÒ²¿ÉÒÔ×Ô¶¨ÒåÈÎºÎ×Ô¼ºµÄ²å¼þÐèÒªÅäÖÃµÄÄÚÈÝ£¬µ±È»£¬Èç¹ûÄãÄ³¸ö²å¼þ²»Ê¹ÓÃµÄ»°£¬Ò²¿ÉÒÔÉ¾³ýÏà¹ØµÄÅäÖÃ

	------------------------------------------------------------------------------------------------------------------

	*/

	cpt_lights:'1',

	/*

	¸Ã´¦¶¨ÒåÊÇ·ñÊ¹ÓÃ¿ª¹ØµÆ£¬ºÍright.swf²å¼þÅäºÏ×÷ÓÃ,Ê¹ÓÃ¿ªµÆÐ§¹ûÊ±µ÷ÓÃÒ³ÃæµÄjsº¯Êýfunction closelights(){};

	*/

	cpt_share:'null',

	/*

	·ÖÏí²å¼þµ÷ÓÃµÄÅäÖÃÎÄ¼þµØÖ·

	µ÷ÓÃ²å¼þ¿ªÊ¼

	*/

    cpt_list:ckcpt()

	/*

	ckcpt()ÊÇ±¾ÎÄ¼þ×îÉÏ·½µÄ¶¨Òå²å¼þµÄº¯Êý

	*/

	}

    return ck;

}

/*

html5²¿·Ö¿ªÊ¼

ÒÔÏÂ´úÂëÊÇÖ§³Öhtml5µÄ£¬Èç¹ûÄã²»ÐèÒª£¬¿ÉÒÔÉ¾³ý¡£

html5´úÂë¿éµÄ´úÂë¿ÉÒÔËæÒâ¸ü¸ÄÒÔÊÊºÏÄãµÄÓ¦ÓÃ£¬»¶Ó­µ½ÂÛÌ³½»Á÷¸ü¸ÄÐÄµÃ

*/

(function() {	

	var CKobject= {

		_K_:function(d){return document.getElementById(d);},

		getVideo:function(s){

			var v='';

			if(s){

				for(var i=0;i<s.length;i++){

					var a=s[i].split('->');

					if(a && a[0]){

						v+='<source src="'+a[0]+'"';

					}

					if(a.length==2 && a[1]){

						v+=' type="'+a[1]+'"';

					}

					v+='>';

				}

			}

			return v;

		},

		getVars:function(v,k){

			if(v[k]){

				return v[k];

			}

		},

		getParams:function(v){

			var p='';

			if(v){

				if(this.getVars(v,'p')==1 && this.getVars(v,'m')!=1){

					p+=' autoplay="autoplay"';

				}

				if(this.getVars(v,'e')==1){

					p+=' loop="loop"';

				}

				if(this.getVars(v,'m')==1){

					p+=' preload="meta"';

				}

				if(this.getVars(v,'i')){

					p+=' poster="'+this.getVars(v,'i')+'"';

				}

			}

			return p;

		},

		browser:function(){

			var m = (function(ua){

				var a=new Object();

				var b = {

					msie: /msie/.test(ua) && !/opera/.test(ua),

					opera: /opera/.test(ua),

					safari: /webkit/.test(ua) && !/chrome/.test(ua),

					firefox: /firefox/.test(ua),

					chrome: /chrome/.test(ua)

				};

				var vMark = '';

				for (var i in b) {

					if (b[i]) { vMark = 'safari' == i ? 'version' : i; break; }

				}

				b.version = vMark && RegExp('(?:' + vMark + ')[\\/: ]([\\d.]+)').test(ua) ? RegExp.$1 : '0';

				b.ie = b.msie;

				b.ie6 = b.msie && parseInt(b.version, 10) == 6;

				b.ie7 = b.msie && parseInt(b.version, 10) == 7;

				b.ie8 = b.msie && parseInt(b.version, 10) == 8;

				a.B=vMark;

				a.V=b.version;

				return a;

			})(window.navigator.userAgent.toLowerCase());

			return m;

		},

		Platform:function(){

			var w=''; 

			var u = navigator.userAgent, app = navigator.appVersion;              

			var b={                  

				iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,

				iPad: u.indexOf('iPad') > -1,

				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,

				webKit: u.indexOf('AppleWebKit') > -1,

				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,

				presto: u.indexOf('Presto') > -1,

				trident: u.indexOf('Trident') > -1,       

				mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/),

				webApp: u.indexOf('Safari') == -1

			}; 

			for (var k in b){

				if(b[k]){

					w=k;

					break;

				}

			}

			return w;

		},

		getpath:function(z) {

			var d = unescape(window.location.href).replace('file:///', '');

			var k = parseInt(document.location.port);

			var u = document.location.protocol + '//' + document.location.hostname;

			var l = '',e = '',t = '';

			var s = 0;

			var r = z.split('//');

			if (r.length > 0) {

				l = r[0] + '//'

			}

			var h = 'http|https|ftp|rtsp|mms|ftp|rtmp';

			var a = h.split('|');

			if(k!=80 && k){

				u+=':'+k;

			}

			for (i = 0; i < a.length; i++){

				if ((a[i] + '://') == l){

					s = 1;

					break;

				}

			}

			if (s == 0) {

				if (z.substr(0, 1) == '/'){

					t = u + z;

				}

				else {

					e = d.substring(0, d.lastIndexOf('/') + 1).replace('\\', '/');

					var w = z.replace('../', './');

					var u = w.split('./');

					var n = u.length;

					var r = w.replace('./', '');

					var q = e.split('/');

					var j = q.length - n;

					for (i = 0; i < j; i++) {

						t += q[i] + '/';

					}

					t += r;

				}

			}

			else {

				t = z;

			}

			return t;

		},

		Flash:function(){

			var f=false,v=0;

			if(document.all){

				try { 

					var s=new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); 

					f=true;

					var z=s.GetVariable('$version');

					v=parseInt(z.split(' ')[1].split(',')[0]);

				} 

				catch(e){} 

			}

			else{

				if (navigator.plugins && navigator.plugins.length > 0){

					var s=navigator.plugins['Shockwave Flash'];

					if (s){

						f=true;

						var w = s.description.split(' ');

						for (var i = 0; i < w.length; ++i){

							if (isNaN(parseInt(w[i]))) continue;

								v = parseInt(w[i]);

							}

						}

				}

			}

			return {f:f,v:v};

		},

		embedHTML5:function(C,P,W,H,V,A,S){

			var v='',

			b=this.browser()['B'],

			v=this.browser()['V'],

			x=v.split('.'),

			t=x[0],

			m=b+v,

			n=b+t,

			w='',

			s=false,

			f=this.Flash()['f'],

			a=false;

			if(!S){

				S=['iPad','iPhone','ios'];

			}

			for(var i=0;i<S.length;i++){

				w=S[i];

				if (w.indexOf('+')>-1){

					w=w.split('+')[0];

					a=true;

				}

				else{

					a=false;

				}

				if(this.Platform()==w|| m==w || n==w || b==w){

					if(a){

						if(!f){

							s=true;

							break;

						}

					}

					else{

						s=true;

						break;

					}

				}

			}

			if(s){

				v='<video controls id="'+P+'" width="'+W+'" height="'+H+'"'+this.getParams(A)+'>'+this.getVideo(V)+'</video>';

				this._K_(C).innerHTML=v;

				this._K_(C).style.width=W+'px';

				this._K_(C).style.height=H+'px';

				this._K_(C).style.backgroundColor='#000';

			}

		},

		getflashvars:function(s){

			var v='',i=0;

			if(s){

				for(var k in s){

					if(i>0){

						v+='&';

					}

					if(k=='f' && s[k] && !ckstyle()['pm_repc']){

						s[k]=this.getpath(s[k]);

						if(s[k].indexOf('&')>-1){

							s[k]=encodeURIComponent(s[k]);

						}

					}

					if(k=='y' && s[k]){

						s[k]=this.getpath(s[k]);

					}

					v+=k+'='+s[k];

					i++;

				}

			}

			return v;

		},

		getparam:function(s){

			var w='',v='',

			o={

				allowScriptAccess:'always',

				allowFullScreen:true,

				quality:'high',

				bgcolor:'#000'

			};

			if(s){

				for(var k in s){

					o[k]=s[k];

				}

			}

			for(var e in o){

				w+=e+'="'+o[e]+'" ';

				v+='<param name="'+e+'" value="'+o[e]+'" />';

			}

			w=w.replace('movie=','src=');

			return {w:w,v:v};

		},

		getObjectById:function (s){

			var X = null,

			Y = this._K_(s),

			r = 'embed';

			if (Y && Y.nodeName == 'OBJECT') {

				if (typeof Y.SetVariable != 'undefined') {

					X = Y;

				} else {

					var Z = Y.getElementsByTagName(r)[0];

					if (Z) {

						X = Z;

					}

				}

			}

			return X;

		},

		embedSWF:function(C,D,N,W,H,V,P){

			if(!N){N='ckplayer_a1'}

			if(!P){P={};}

			var u='undefined',

			j=document,

			r='http://www.macromedia.com/go/getflashplayer',

			t='<a href="'+r+'" target="_blank">Çëµã»÷´Ë´¦ÏÂÔØ°²×°×îÐÂµÄflash²å¼þ</a>',

			error={

				w:'ÄúµÄÍøÒ³²»·ûºÏw3c±ê×¼£¬ÎÞ·¨ÏÔÊ¾²¥·ÅÆ÷',

				f:'ÄúÃ»ÓÐ°²×°flash²å¼þ£¬ÎÞ·¨²¥·ÅÊÓÆµ£¬'+t,

				v:'ÄúµÄflash²å¼þ°æ±¾¹ýµÍ£¬ÎÞ·¨²¥·ÅÊÓÆµ£¬'+t

			},

			w3c=typeof j.getElementById != u && typeof j.getElementsByTagName != u && typeof j.createElement != u,

			i='id="'+N+'" name="'+N+'" ',

			s='',

			l='';

			P['movie']=C;

			P['flashvars']=this.getflashvars(V);

			s+='<object  pluginspage="http://www.macromedia.com/go/getflashplayer" ';

			s+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';

			s+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ';

			s+='width="'+W+'" ';

			s+='height="'+H+'" ';

			s+=i;

			s+='align="middle">';

			s+=this.getparam(P)['v'];

			s+='<embed ';

			s+=this.getparam(P)['w'];

			s+=' width="'+W+'" height="'+H+'" name="'+N+'" id="'+N+'" align="middle" '+i;

			s+='type="application/x-shockwave-flash" pluginspage="'+r+'" />';

			s+='</object>';

			if(!w3c){

				l=error['w'];

			}

			else{

				if(!this.Flash()['f']){

					l=error['f'];

				}

				else{

					if(this.Flash()['v']<10){

						l=error['f'];

					}

					else{

						l=s;

					}

				}

			}

			if(l){

				this._K_(D).innerHTML=l;

				this._K_(D).style.color='#FFDD00';

			}

		}

	}

	window.CKobject = CKobject;

})();

/*

html5 ²¿·Ö½áÊø

======================================================

SWFObject v2.2

Èç¹ûÄãµÄÍøÕ¾ÀïÒÑ¾­ÓÐswfobjectÀà£¬¿ÉÒÔÉ¾³ýÏÂÃæµÄ

*/

//swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();