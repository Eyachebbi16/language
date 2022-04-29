/*translate()
{
	document.getElementById("text1").addEventListener("onkeyup", tarjem());
}*/
function tarjem()
{
	let input=document.getElementById('text1').value;
	let output=document.getElementById('text2');
	var s=document.getElementById('languages').value;
	var myJSON1,myJSON2,myJSON3,myJSON4,myJSON5,myJSON6;
	input=input.toLowerCase();
	if(s=="المصرية")
	{
		if (input=="لا أعرف")
			{
				output.innerHTML='ما بعرفش';//Définir la valeur de innerHTML vous permet de remplacer aisément le contenu existant d'un élément par un nouveau contenu.

			}
		else if (input=="طبيب") 
		{
			output.innerHTML="دكتور";
		}
		else if (input=="حسنا") 
		{
			output.innerHTML="ماشي";
		}
		else if (input=="أنظر") 
		{
			output.innerHTML="بص";
		}
		else if (input=="مادا رأيك") 
		{
			output.innerHTML="ايه رأيك";
		}
		else if (input=="كيف أحوالك") 
		{
			output.innerHTML="ازيك";
		}
		else if (input=="أخرج") 
		{
			output.innerHTML="إطلع برا";
		}
		else if (input=="ولد") 
		{
			output.innerHTML="ياض";
		}
		else if (input=="اليوم") 
		{
			output.innerHTML="النهاردة";
		}
		else if (input=="الطماطم") 
		{
			output.innerHTML="اوطة";
		}
		

		else
		{
			output.innerHTML="";
		}
	}
	else if (s="العراقية") 
	{
		if (input=="لا أعرف")
			{
			output.innerHTML='ما ندري ';
			}
		else if (input=="حسنا")  
		{
		output.innerHTML="خوش";
		}
		else if (input=="أنظر") 
		{
			output.innerHTML="باوع";
		}
		else if (input=="مادا رأيك") 
		{
			output.innerHTML="شنو رأيك";
		}
		else if (input=="أخرج")  
		{
			output.innerHTML="ولي";
		}
		else if (input=="قرط") 
		{
			output.innerHTML="ترجية";
		}
		else if (input=="الزجاج") 
		{
			output.innerHTML="جام";
		}
		else if (input=="بسببك")  
		{
			output.innerHTML="صوجك";
		}
		else if (input=="الكرسي")  
		{
			output.innerHTML="سكملي";
		}
		else if (input=="غبي")  
		{
			output.innerHTML="اثول";
		}
		else
			{
				output.innerHTML="";
			}
	
	}
	else if(s="السعودية")
	{
		if (input==" أعرف")
			{
				output.innerHTML="أبخض";
			}
			else if (input=="أنظر")  
			{
				output.innerHTML="أشبح";
			}
		else if (input=="مرحباً") 
			{
				output.innerHTML="أرحَب";
			}
			else if (input=="كيف حالك")
			{
				output.innerHTML="إش لونك";
			}
			else if (input=="كيف حالك")
			{
				output.innerHTML="كيف أخبارك";
			}
			else if (input=="غبي")
			{
				output.innerHTML="تنكة";
			}
			else if (input=="أسرع")
			{
				output.innerHTML="ادعس";
			}
			else if (input=="طنش")
			{
				output.innerHTML="اخصر";
			}
			else if (input=="اسكت")
			{
				output.innerHTML="اسْبَطْ";
			}


		else
			{
				output.innerHTML="";
			}

	}
	else if(s="اللبنانية")
	{
		if (input=="حداء نسائي")
			{
				output.innerHTML="اسكربينة";
			}
			else if (input=="الناضج") 
			{
				output.innerHTML="شنتير";
			}
			else if (input=="أنظر")  
			{
				output.innerHTML="ائشع";
			}
		else if (input=="بصعوبة") 
			{
				output.innerHTML=" انجع";
			}
			else if (input=="المستودع")
			{
				output.innerHTML=" التختية";
			}
			else if (input=="ثلاجة")
			{
				output.innerHTML="البراد";
			}
			else if (input=="فضولي")
			{
				output.innerHTML="شاضوم";
			}
			else if (input=="أحبك")
			{
				output.innerHTML="تقبرني";
			}
			else if (input=="على راسي")
			{
				output.innerHTML="بتمون";
			}
			else if (input=="لا تهتم لامره")
			{
				output.innerHTML="يأوّش ";
			}
		else
			{
				output.innerHTML="";
			}
		}
		else if(s="الفلسطنية")
		{
			if (input=="الاشارة الضوئية")
				{
					output.innerHTML="الرمزون";
				}
				else if (input=="مزح") 
				{
					output.innerHTML="بتخوت";				}
				else if (input=="لا أريد")  
				{
					output.innerHTML="بديش";				}
			else if (input=="حداء خفيف") 
				{
					output.innerHTML="بابوج";
				}
				else if (input=="دراجة هوائية ")
				{
					output.innerHTML=" بسكليت";
				}
				else if (input=="أريد")
				{
					output.innerHTML="بدی";
				}
				else if (input=="تستحم")
				{
					output.innerHTML="تبربح";
				}
				else if (input=="عطشان")
				{
					output.innerHTML="طاشِش";
				}
				else if (input=="غبي")
				{
					output.innerHTML="طربش";
				}
				else if (input=="رائع")
				{
					output.innerHTML="طَقِع";
				}
				else if (input=="شجاع")
				{
					output.innerHTML="قَبَضَايْ";
				}
			else
				{
					output.innerHTML="";
				}
		}
		else if(s="التونسية")
		{
			if (input==" لا أعرف")
				{
					output.innerHTML="ما نعرش";
				}
				else if (input=="أنظر")  
				{
					output.innerHTML="شوف";
				}
			else if (input=="مرحباً") 
				{
					output.innerHTML="أهلا بيك";
				}
				else if (input=="كيف حالك")
				{
					output.innerHTML="شنوة أحوالك";
				}
				else if (input=="ثلاجة")
				{
					output.innerHTML="فريجيدر";
				}
				else if (input=="سيارة")
				{
					output.innerHTML="كرهبة";
				}
				else if (input=="ملعقة")
				{
					output.innerHTML="مغرفة";
				}
				else if (input=="غرفة")
				{
					output.innerHTML="بيت";
				}
				else if (input=="منزل")
				{
					output.innerHTML="دار";
				}
				else if (input=="منزل")
				{
					output.innerHTML="حوش";
				}
				else if (input=="حديقة")
				{
					output.innerHTML="جردة";
				}
				
			else
				{
					output.innerHTML="";
				}
		}
		const api="file:///C:/Users/EYA/Documents/IOT%202/Deuxiéme%20Semestre/Traveaux%20Pratiques/programmation%20web/projet/trad.json"
		async function recupere()
		{
			const trad = await fetch(api);
			const data = await trad.json();
			const{mot1,mot2,mot3,mot4,mot5,mot6,mot7,mot8,mot9,mot10,mot0} = data;
			document.getElementById("text2").textContent = mot0;
			document.getElementById("text2").textContent = mot1;
			document.getElementById("text2").textContent = mot2;
			document.getElementById("text2").textContent = mot3;
			document.getElementById("text2").textContent = mot4;
			document.getElementById("text2").textContent = mot5;
			document.getElementById("text2").textContent = mot6;
			document.getElementById("text2").textContent = mot7;
			document.getElementById("text2").textContent = mot8;
			document.getElementById("text2").textContent = mot9;
			document.getElementById("text2").textContent = mot10;

		}
}
