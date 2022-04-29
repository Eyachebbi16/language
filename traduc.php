<?php
    mysql_connect('localhoost','root','') or die ('connexion impossible');
	mysql_select_db('langue') or die ('base introuvable');
	
	$liste=$_POST['D1'];
    $in=$_POST['S1'];
	$out=$_POST['S2'];
    
if( $liste == "tinisienne")
{
    $r=mysql requery('select mot1 where $in==mot1 from tunisienne') or die('mysql error()');
    $a=mysql requery('select mot2 where $in==mot2 from tunisienne') or die('mysql error()');
    $z=mysql requery('select mot3 where $in==mot3 from tunisienne') or die('mysql error()');
    $q=mysql requery('select mot4 where $in==mot4 from tunisienne') or die('mysql error()');
    $t=mysql requery('select mot5 where $in==mot5 from tunisienne') or die('mysql error()');
    $p=mysql requery('select mot6 where $in==mot6 from tunisienne') or die('mysql error()');
    $res=mysql requery('select mot7 where $in==mot7 from tunisienne') or die('mysql error()');
    $syn=mysql requery('select mot8 where $in==mot8 from tunisienne') or die('mysql error()');
    $m=mysql requery('select mot9 where $in==mot9 from tunisienne') or die('mysql error()');
    $mot=mysql requery('select mot10 where $in==mot10 from tunisienne') or die('mysql error()');
    $b=mysql requery('select mot0 where $in==mot0 from tunisienne') or die('mysql error()');
}
if( $liste == "egyptienne")
{
    $r=mysql requery('select mot1 where $in==mot1 from egyptienne') or die('mysql error()');
    $a=mysql requery('select mot2 where $in==mot2 from egyptienne') or die('mysql error()');
    $z=mysql requery('select mot3 where $in==mot3 from egyptienne') or die('mysql error()');
    $q=mysql requery('select mot4 where $in==mot4 from egyptienne') or die('mysql error()');
    $t=mysql requery('select mot5 where $in==mot5 from egyptienne') or die('mysql error()');
    $p=mysql requery('select mot6 where $in==mot6 from egyptienne') or die('mysql error()');
    $res=mysql requery('select mot7 where $in==mot7 from egyptienne') or die('mysql error()');
    $syn=mysql requery('select mot8 where $in==mot8 from egyptienne') or die('mysql error()');
    $m=mysql requery('select mot9 where $in==mot9 from egyptienne') or die('mysql error()');
}
if( $liste == "iraq")
{
    $r=mysql requery('select mot1 where $in==mot1 from iraq') or die('mysql error()');
    $a=mysql requery('select mot2 where $in==mot2 from iraq') or die('mysql error()');
    $z=mysql requery('select mot3 where $in==mot3 from iraq') or die('mysql error()');
    $q=mysql requery('select mot4 where $in==mot4 from iraq') or die('mysql error()');
    $t=mysql requery('select mot5 where $in==mot5 from iraq') or die('mysql error()');
    $p=mysql requery('select mot6 where $in==mot6 from iraq') or die('mysql error()');
    $res=mysql requery('select mot7 where $in==mot7 from iraq') or die('mysql error()');
    $syn=mysql requery('select mot8 where $in==mot8 from iraq') or die('mysql error()');
    $m=mysql requery('select mot9 where $in==mot9 from iraq') or die('mysql error()');
}
if( $liste == "libanon")
{
    $r=mysql requery('select mot1 where $in==mot1 from libanon') or die('mysql error()');
    $a=mysql requery('select mot2 where $in==mot2 from libanon') or die('mysql error()');
    $z=mysql requery('select mot3 where $in==mot3 from libanon') or die('mysql error()');
    $q=mysql requery('select mot4 where $in==mot4 from libanon') or die('mysql error()');
    $t=mysql requery('select mot5 where $in==mot5 from libanon') or die('mysql error()');
    $p=mysql requery('select mot6 where $in==mot6 from libanon') or die('mysql error()');
    $res=mysql requery('select mot7 where $in==mot7 from libanon') or die('mysql error()');
    $syn=mysql requery('select mot8 where $in==mot8 from libanon') or die('mysql error()');
    $m=mysql requery('select mot9 where $in==mot9 from libanon') or die('mysql error()');
    $mot=mysql requery('select mot10 where $in==mot10 from libanon') or die('mysql error()');
    $b=mysql requery('select mot0 where $in==mot0 from libanon') or die('mysql error()');
}
if( $liste == "palastine")
{
    $r=mysql requery('select mot1 where $in==mot1 from palastine') or die('mysql error()');
    $a=mysql requery('select mot2 where $in==mot2 from palastine') or die('mysql error()');
    $z=mysql requery('select mot3 where $in==mot3 from palastine') or die('mysql error()');
    $q=mysql requery('select mot4 where $in==mot4 from palastine') or die('mysql error()');
    $t=mysql requery('select mot5 where $in==mot5 from palastine') or die('mysql error()');
    $p=mysql requery('select mot6 where $in==mot6 from palastine') or die('mysql error()');
    $res=mysql requery('select mot7 where $in==mot7 from palastine') or die('mysql error()');
    $syn=mysql requery('select mot8 where $in==mot8 from palastine') or die('mysql error()');
    $m=mysql requery('select mot9 where $in==mot9 from palastine') or die('mysql error()');
    $mot=mysql requery('select mot10 where $in==mot10 from palastine') or die('mysql error()');
    $b=mysql requery('select mot0 where $in==mot0 from palastine') or die('mysql error()');
}

?>
