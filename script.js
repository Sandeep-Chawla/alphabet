window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  //for up to down of apex aplabet
  gsap.from("#down", {
    scrollTrigger: {
      trigger: "#home",
      toggleActions: "restart none restart restart",
    },
    opacity: 0,
    y: -300,
    duration: 1,
  });
  // for down to up of add and rera no
  gsap.from("#up", {
    scrollTrigger: {
      trigger: "#home",
      toggleActions: "restart none restart restart",
    },
    opacity: 0,
    y: 300,
    duration: 1,
  });

  // for prop desc left to right
  var sections = gsap.utils.toArray(".left");
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: "#trigger",
        toggleActions: "restart none restart restart",
      },
      duration: 1,
      opacity: 0,
      x: -100,
    });
  });

  //for prop desc and walkthrough bottom to up
  var sections = gsap.utils.toArray(".property");
  sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: "#trigger",
      toggleActions: "restart none restart restart",
    },
    opacity: 0,
    y: 300,
    duration: 1,
  });
})
// for project heighlight down to up
gsap.from("#project", {
    scrollTrigger: {
      trigger: "#projecttrigger",
      toggleActions: "restart none restart restart",
    },
    opacity: 0,
    y: 300,
    duration: 1,
  });

  // for floor pan down to up
  gsap.from("#floor", {
    scrollTrigger: {
      trigger: "#floortrigger",
      toggleActions: "restart none restart restart",
    },
    opacity: 0,
    y: 300,
    duration: 1,
  });
  // refresh trigger to remove overlaping
  ScrollTrigger.refresh();
});
window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
  
});
$("#menu").click(()=>{
    $("#phonemenu").toggle()
    $("#phonemenu").toggleClass('h-fit')
    $("#phonemenu").toggleClass('height')

}
)
$("#drio").click(()=>{
    $("#drio-menu").toggle()
    $('#about-menu').hide()
})
$("#about").click(()=>{
    $('#about-menu').toggle()
    $("#drio-menu").hide()
})
