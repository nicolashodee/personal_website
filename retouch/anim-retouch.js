

// ANIMATION FOR RETOUCH SLIDER

retouchBlock.forEach(block => {
  const animRetouch = gsap.timeline({ defaults: {ease: 'none'} }); 
  animRetouch.from(".retouch-text", {x:"+100%", opacity: 0, duration: 0.5});
  
  ScrollTrigger.create({
    trigger: block,
    start: "top 60%",
    onEnter: () => animRetouch.play()
  });
  
  ScrollTrigger.create({
    trigger: block,
    start: "top 60%",
    onLeaveBack: () => animRetouch.reverse()
  });
});

// ANIMATION FOR FOLDERS GRID

const folderItems = document.querySelectorAll('.folders li');
const folderBlock = document.querySelector('.folders');

folderItems.forEach(block => {
  const animFolders = new timeline
  animFolders.from(block, {x:"+100%", opacity: 0, duration: 0.5});
  
  ScrollTrigger.create({
    trigger: block,
    start: "top 80%",
    onEnter: () => animFolders.play()
  });
  
  ScrollTrigger.create({
    trigger: block,
    start: "top 80%",
    onLeaveBack: () => animFolders.reverse()
  });
});
