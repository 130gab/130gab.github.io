var timeControl=1200;
function startTheGame()
{
	setInterval("function setATile()
	{
		var tileControl;
		switch (Math.floor((Math.random()*26)+1))
		{
			case 1:
				tileControl='A';
				break;
			case 2:
				tileControl='B';
				break;
			case 3:
				tileControl='C';
            	break;
        	case 4:
				tileControl='D';
            	break;
        	case 5:
            	tileControl='E';
            	break;
        	case 6:
            	tileControl='F';
            	break;
        	case 7:
            	tileControl='G';
            	break;
			case 8:
				tileControl='H';
				break;
        	case 9:
            	tileControl='I';
            	break;
        	case 10:
            	tileControl='J';
            	break;
        	case 11:
            	tileControl='K';
            	break;
        	case 12:
            	tileControl='L';
            	break;
        	case 13:
            	tileControl='M';
            	break;
        	case 14:
            	tileControl='N';
            	break;
			case 15:
				tileControl='O';
				break;
			case 16:
           		tileControl='P';
            	break;
        	case 17:
            	tileControl='Q';
            	break;
        	case 18:
				tileControl='R';
            	break;
        	case 19:
            	tileControl='S';
            	break;
        	case 20:
            	tileControl='T';
            	break;
        	case 21:
            	tileControl='U';
            	break;
        	case 22:
            	tileControl='V';
            	break;
			case 23:
				tileControl='W';
				break;
			case 24:
				tileControl='X';
				break;
			case 25:
				tileControl='Y';
				break;
			case 26:
				tileControl='Z';
				break;
   		}
		if(tileControl=='Q'||tileControl=='W'||tileControl=='E')
		{
			document.getElementById('a').innerHTML=tileControl;
			document.getElementById('a').style='background-color:yellow';
		}
		else if(tileControl=='R'||tileControl=='T'||tileControl=='Y'||tileControl=='U')
		{
			document.getElementById('b').innerHTML=tileControl;
			document.getElementById('b').style='background-color:yellow';
		}
		else if(tileControl=='I'||tileControl=='O'||tileControl=='Y'||tileControl=='P')
		{
			document.getElementById('c').innerHTML=tileControl;
			document.getElementById('c').style='background-color:yellow';
		}
		else if(tileControl=='A'||tileControl=='S'||tileControl=='D')
		{
			document.getElementById('d').innerHTML=tileControl;
			document.getElementById('d').style='background-color:yellow';
		}
		else if(tileControl=='F'||tileControl=='G'||tileControl=='H')
		{
			document.getElementById('e').innerHTML=tileControl;
			document.getElementById('e').style='background-color:yellow';
		}
		else if(tileControl=='J'||tileControl=='K'||tileControl=='L')
		{
			document.getElementById('f').innerHTML=tileControl;
			document.getElementById('f').style='background-color:yellow';
		}
		else if(tileControl=='Z'||tileControl=='X')
		{
			document.getElementById('g').innerHTML=tileControl;
			document.getElementById('g').style='background-color:yellow';
		}
		else if(tileControl=='C'||tileControl=='V'||tileControl=='B')
		{
			document.getElementById('h').innerHTML=tileControl;
			document.getElementById('h').style='background-color:yellow';
		}
		else if(tileControl=='N'||tileControl=='M')
		{
			document.getElementById('i').innerHTML=tileControl;
			document.getElementById('i').style='background-color:yellow';
		}
		timeControl=timeControl-1;
		return 0;
	}", timeControl);
}
function weed()
{
	//test if if javascript works
	alert("weed!");
}