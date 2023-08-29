export function changeBackgroundImage() {
  // Get the current URL
  const currentUrl = window.location.href;

  // Check the URL or any pattern you want and set the background image accordingly
  if (currentUrl.includes('game') || currentUrl.includes('high-scores')) {
    document.body.style.background = 'url("/Background Sunset.png")';
  } else if (currentUrl.includes('home')) {
    document.body.style.background = 'url("/Background Evening.png")';
  } else {
    // Default background image if the URL doesn't match any pattern
    document.body.style.background = 'url("/Background Day.png")';
  }

  // Set background properties for best display
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
}