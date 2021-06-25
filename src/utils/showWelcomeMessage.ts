export const showWelcomeMessage = (): void => {
  console.log(`
  %cMAY THE FORCE BE WITH YOU
  `,'font-size:20px; margin-left: 186px;')
  console.log(`
 +----------------------------------------------------------------------------------------------------+
  |''........',;;;;;;;;::::clllcccccc::ccccccccccl:c:;;;c:;:;,','''....';:lloolllcccclllllodddddddxxkkx|
  |''.......'''',,;;::;;::clllllllccccccllcccccllcccdxxkOkxdocc:;,''''';:looodddollcclooooddddxxxxxkkkx|
  |''''...',;,,'',;;::;:cloooooooolccccclllllcloOKXWWNNNNNNNNX0xl:;,,,;:loddxxkkxdollloooodddxxkkkkkkkx|
  |''''''',;;,,'',,;;::ccoooooodoolcccclodxxxx0NWNNNNNNNXNNNNNNNX0xoc;;coxkkkkOOkxdooooooddxxkkkkkkxxxx|
  |,''''',,;;;,'',,;;::cloooooooolccclldk000XNWNNWNNNNNNNNNNNNNNXXXKOolodxkkkkkOOkxddloooodxxkkkkkxxxxx|
  |,''',,,,;;;,,,,,,;::cllddddollcccclxkO0XNNNNNNXNNNNNNNXXXXXXXXKKXXKOxxxxxxxkO0Oo'..loooddxkkkkxxdddd|
  |''',;;;;::;;,,,,,;;:::clooollcccloxkOKNNWWNNNNNNXXXXXXKXXOOOOO0KK0KK00OkOkxdc;'''.,ooooddxkkkxxdoooo|
  |',,;;:::::::;;;;;;;;;::ccllccccloxO0XN0O0kdd0dc::::clldk0kkOKXNXNNNX0Okxc,,,,,':,'odddddxxxxxddooloo|
  |,,,;:ccc::::::;;;;;;;;::cccccllodd:,;::,cl;;;;dKXKkd:,',lx0KKXXXKko:,,,,,,;;;co:,xOOOOOOOOkxdolllloo|
  |;;;:llcc::::::;;;;;:::ldoooxO00kOllk0kl;xOd::::;colcccc:cdxxk0xc'..',',,:oxol:,o0KKKKKKK00Okdooooodd|
  |;:clllcc::::::::;;:::cl;;:cc;cok00c:coodXXKO0xl;:;,',,coodoxkOl;'...',,lOk:';dKXXXXXXXXKKK0Okxxxxkkk|
  |clooollcc::::::::::::::::::lxo::lc:;cooOxdxkkKl,'.';odollclc:;:::;:ldkkd;'cOXNNNNNNXXXXXKKK000000000|
  |loddollccc::ccc::::::::::::ccdKOO0;',oOc''';xOxc;,,,;,,''.....,;;;;cc:,'ckXNNNNXXNNNXXXXXXKKKKKKKKKK|
  |cloollcc:::::ccc:::::ccccc::cco0NKxclxNXOxkXXKd;,,'''''......'',,'.....;dOXNNNNNXXNNXXXXXXXXKKKKKKKK|
  |cllllcccc::::::cc:::ccccccc::cclOc,::0KKOOxddl:,,,''............,''..',lOKKXXXXNNXXXXXXXXXXXXXKXKXKK|
  |ccccclcc::::::cccc::ccccccc::::looc,';,,''''''',,'''................'';xKXXXNXXXXXXXXXXXXXXXKKKKKKXK|
  |ccccccc::::ccloollcccccccc:::::cccl:,''''''''''''''..................',lXNNNNXXXXXXXXXXXXXXKKKKKKKKK|
  |cccccc:::::clooollcccccccccccccccclol:;,''..''''...'........  ........,:xOXNNNNNXXXXXXXXXKKKKKKKKKKK|
  |cccccccc::cccccc::::::cccclllllllllllodxd:''.........................,;cldkXXNNNNNXKKKKKKK0000000000|
  |ccllcccccccccc:ccccccccccllloooooooodk0KK0ko,......................,,;clloxOKXNNNNNXK0OOOOOkkkOOOkkk|
  |ccllcccllllccccccclllllllllooodxxxdxkKXXXXXXk,'..................';,cxk00KKKXNNNNNNNX0OOkkkxxxxxxxxd|
  |cccccclllllcccllolloodxxkk0000KKK0koxKXNNNX0l'.......''....  ..,;;,c0KKKXXXNNNNNXXNNXXKkkxxxddxxddoo|
  |olodollllodddxk0000KKKXXKKXXXXXXXKKKNWN0XX0:,d'..   ....    .,;;;,:xk0KXXNNNNXXXXXKKKXKkddddddddoooo|
  |KKKKOxolxKXXKKKXXXXXKKXX0O0KKKK00NNNNXkkXO;okl..          .;lcc:,:xk0K0KKK0OOOO00KOk0000xdddddoooooo|
  |XK0OkxxkOKNNNXXXXK0kocok0K0Okxk0NWNNNOx0d,oKO:'....     .;cddlc:'cxOOOOkOO00000000OxkOk0xdoodddooooo|
  |OOxocclk0XXXX0kkxkkxoccoxxxdodkNNNNNKO0dlKX0k:....     .odxdlll:.,lldxxOOOkkOk00000OOxlokddddxxxxdoo|
  |doc;...'codOK00Oxdllll::ccllcoX0dkXKKOc;0X0ko'...      ,;,:dooo;.,;cl:llccxOkOKXX0Okdl;,lxxkkkO0Okxd|
  |':oxc. ..':dxxoc,......,;:cllxXXxc0KXo;lKxccldd;'......:;,ccoxc:'';:,cdxkkxk0NNKOOkdc;,',xO000000OOk|
  |.';c:....',;,....  ....,clok0KWNNXXXKKddkxOO0O0k'....':;,';lc:cc'.,:xOkxO0KXNNKOxdc,,,'.;O000000KK00|
  |   ............     ...,o0XNK00XNNNNK0kONNNXXXK0l...:c;:,,cc;;;c;';000K0ddkKKxdlcc:,,'',:x00000KKKK0|
  |     ......'..      ...';OklldKNNXOkkklcKNNNNXX0k:.cl,;,;cc;,';:lld0XNNNXKOkl;,,,,,,'.,cloKKKKXXXKK0|
  |      ..................xx;;oXXkc,.',,''x0XNNNNNN0kx..,',,''',:;:oKXNX0koc;;;;;;:;,'.':lcc0KKKXXK0KK|
  |         .............,OXl:x0dc'.. .....:okXNNNNNNNXko:'.......'xKX0xddlc::cccll:,'..;cc::OKKKXXKKXX|
  |          ............xx;c0xlk,...      .;cKKkO0XXNNNNWNXo,':doONNNKkoocclxkkxoc:...,::;;:00OO0KKXNX|
  |  ..........''....',;;ld0X:.ld'.  ..   ',.,OOxcoxkKXNNNWWNNKNNNNNNNNNNXKKXNX0d:,..',;;,,,:OkxO00KNNX|
  |;loc;,,,;cc:::ccldddddkXNO,';'.         . .cKXOooldx0XNNNNNNNNNNNNXKKKKK0XNKd:;....';,.',o0OO00KXNNK|
  |xxxddxxkO00kooxkOkO0OkKWNd',l,.      ..   .'k0KKOc::lx0KKXNNNNXXXXXKOlc:;:l:'. ...',,'',cO0OxxkOOkkk|
  |;,,,:odxxkOOo:;:oxxddx0XKo'.,.      ...   ..llk0Okdc:ccxkkOKNX0xdllll;,''...  ..''''..';k00xddxkkO00|
  |:,;cloxOOdlllcld0KOkkOKXKl''.       ..'.   .oxook00Ooc;;;;:llc:::;;,,'''...  ..,;,...',;O00OO0KKK000|
  |OO0KKKKKkc;cddoxkOkxxdxOO;,,.      ..',.  .':lcccoxxxoc;;,,;;,,,,,,'''..   ...'''...',;c0K0xxk0KK0Ok|
  |KXNXOxdddllcodl:;:cccclx0;.......   .''.. .;lolclccloddoc:;,,,'''''.... .....''....',;clkOOkxOKKK0O0|
  |kxdo:,;loxOkkxddO0O0KOkO0;'...''.  ...'.. 'ok0ko::;;:c::;;;,'''...   .......','...',:coldxkO00OOOkKK|
  |::ccoxO0O0XXX0xOXXK0O0XXO;'.'c,....'..... .;xo;'..........................',,'..',::cldcdkxxOKXK0kOO|
  |occcooxOOxxo:::dOOdox0KKk;';x:,;c:;;''.... .;;,''''''''''',,,,,,,,''.....,,,,',;;,,cdo;xOkl:cxxoddod|
  |KXkloooxxdkOxoodkkllodkKKc:0o;xOkxl:;:,...   .,;;;;;;;;;;;;;,,,,,,,'',,;;;,,'',,,;dd:'l0Oo:.;xlcl:::|
  |dxxoc;::oOO0O00ddl::cddxkdOk'xXXK0dccc,......'.''',,;ccllc:,,,;;;;;;;:::;;'..'';od:;cx0x;...:dkxdxoo|
  |,;col::::cx0kOOdo::lodkkx0K;:XXX0Odccc,'....,;,,,'.....';;,,;;:cclllcc;:;...';oxodkOOd;.....:OOkoccd|
  |''.'',clldl;;:clllllxO0KKXx'xNNNX0occc,'....;:::::;,'....',,;:::dxolcc::;,';dOxodo:,'.......;ddc;cld|
  |..';,:ol:;'';cclcc::;:lo0NO;xXKK0dcoc::'.....;:clloolc:,''',,;lxxollc:;,,cdkxo:,......''..;xd:,'l0Od|
  |';c,,:::;,:ccl:lclooc:;;OXo,xK00Odll:;c......,:clldoodddc,,,;:xOxooo:,''xOo;'....'''''''.'lol:;,lOdd|
  +----------------------------------------------------------------------------------------------------+
  `)

}
