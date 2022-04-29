<?php
    mysql_connect('localhoost','root','') or die ('connexion impossible');
	mysql_select_db('langue') or die ('base introuvable');
	
	$liste=$_POST['D1'];
    $in=$_POST['S1'];
	$out=$_POST['S2'];
    
if( $liste == "tinisienne")
{
    $r=mysql requery ('select * form tunisienne ') or die('mysql error()');
}
if( $liste == "egyptienne")
{
    $r=mysql requery ('select * form egyptienne ') or die('mysql error()');
}
if( $liste == "iraq")
{
    $r=mysql requery ('select * form iraq ') or die('mysql error()');
}
if( $liste == "libanon")
{
    $r=mysql requery ('select * form libanon ') or die('mysql error()');
}
if( $liste == "palastine")
{
    $r=mysql requery ('select * form palastine ') or die('mysql error()');
}

?>
