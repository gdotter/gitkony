var menuTime = 0;
var selectedMenuItemSkin = null;
var selectedMenuItem = null;

//This will track and set the correct skins for the side menu items.
function setMenuItem(curWidget)
{
  if (menuTime == 0)
    {
      frmHome.btnDashboard.skin = btnSideDashNormal;
      menuTime =1;
    }
  else
    {
      selectedMenuItem.skin = selectedMenuItemSkin;
    }
  selectedMenuItemSkin = curWidget.skin;
  selectedMenuItem = curWidget;
  curWidget.skin = curWidget.focusSkin;
  toggleMenu();
}

// Function to toggle the side menu. It will check the current state and set the left property of flxMain.
function toggleMenu(){
if ((""+frmHome.flxMain.left) == 0+"dp")
  {
    frmHome.btnSideMenu.skin = "btnSideMenuActDefault";
    frmHome.btnSideMenu.focusSkin = "btnSideMenuActPressed";
    var animation = kony.ui.createAnimation({
    "100": {
      			"left" :  190+'dp',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  
  frmHome.flxMain.animate(animation,setting);

  }
else
  {
    frmHome.btnSideMenu.skin = "btnSideMenuDefault";
    frmHome.btnSideMenu.focusSkin = "btnSideMenuPressed";
    var animation = kony.ui.createAnimation({
    "100": {
      			"left" : 0 +'dp',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  
  frmHome.flxMain.animate(animation,setting);
  }
}


// Here we will set the skins and side menu state to default. Call when you press the LOGIN button in frmLogin
function resetMenuMain()
{
  if (menuTime != 0)
  {
    selectedMenuItem.skin = selectedMenuItemSkin;
    frmHome.btnDashboard.skin = btnSideDashSelected;
    menuTime =0;
  }
  if (frmHome.flxMain != null)
  {
    frmHome.flxMain.left = 0+"dp"; 
    frmHome.btnSideMenu.skin = "btnSideMenuDefault";
    frmHome.btnSideMenu.focusSkin = "btnSideMenuPressed";
  }
  else
  {
    
  }
}

function tabletMovetoDetails()
{
  var animation = kony.ui.createAnimation({
    "100": {
      			"left" :  -100+'%',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  frmHome.flxMain.animate(animation,setting);
  
  var animation = kony.ui.createAnimation({
    "100": {
      			"left" :  200+'dp',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  frmHome.flxDetails.animate(animation,setting);
}


function tabletMovetoMain()
{
  
  var animation = kony.ui.createAnimation({
    "100": {
      			"left" :  200+'dp',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  frmHome.flxMain.animate(animation,setting);
  
  var animation = kony.ui.createAnimation({
    "100": {
      			"left" :  100+'%',
            	"stepConfig": {"timingFunction" : kony.anim.EASE_IN_OUT}
           }
  });
  var setting = {"delay" : 0,
                 "fillMode" : kony.anim.FILL_MODE_FORWARDS,
                 "duration": 0.3
                };
  frmHome.flxDetails.animate(animation,setting);
}