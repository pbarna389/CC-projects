//Barna section
const headerContent = () => {
  return `
    <header>
    <nav class="navBar">
      <div class="shop">
      <svg class="shop-logo" viewBox="0 0 346.82 188.34" fill="currentColor">
      <path d="M321.25,156.52c-19.42,3.26-38.74,6.24-56.78,8.31l1.42-5.12,1.82-.19c14.35-1.47,38.37-3.94,51.8-6.4a4,4,0,0,0,2-.86A6.27,6.27,0,0,1,321.25,156.52Z"></path>
      <path d="M319.33,152.13c-13.39,2.46-37.39,4.92-51.72,6.39l-1.43.15,5.05-18.16a39.07,39.07,0,0,0,5.92.48,31.68,31.68,0,0,0,15.72-4.06,55.46,55.46,0,0,1,9.15-1.12c2.71,0,18.6,13.44,19.07,15.13C321.12,151.17,321.17,151.79,319.33,152.13Z"></path>
      <path d="M220.64,22.42c-1.11-2-2.29-3.22-3.48-3.51l-.13-.05a7,7,0,0,0-8.57,1.55,14.14,14.14,0,0,1,2.07,1.36l-.31.39a13.45,13.45,0,0,0-2.08-1.35c-.13.16-.27.32-.4.5,2.2,1,9.43,5.67,11.67,24.28,2.23-1.55,5.16-3.64,5.76-4.23C225.52,40,224,28.57,220.64,22.42Zm-7,3.25a21.08,21.08,0,0,0-2-2.21l.35-.36a21.08,21.08,0,0,1,2,2.27Zm2.6,4.21a26.78,26.78,0,0,0-1.46-2.59l.42-.27a25.75,25.75,0,0,1,1.48,2.64Zm1.79,4.61c-.29-1-.62-1.91-1-2.81l.47-.18c.37.91.7,1.86,1,2.85Zm1.1,4.83c-.16-1-.36-2-.58-2.92l.48-.11c.23,1,.43,2,.6,3Zm.53,4.94c-.06-1-.14-2-.25-3l.49,0c.12,1,.2,2,.26,3Z"></path>
      <path d="M236.78,67.49l-5.83,5c-6.27-7.58-10.23-21.41-11.37-25.77,1.07-.74,4.42-3.06,5.83-4.21Z"></path>
      <path d="M231.18,74.23c-.23-.24-.45-.49-.67-.74l.38-.33-.38.32C224,65.92,220,52.15,218.7,47.29l-.1.07-.09-.79c-.14-.56-.22-.92-.25-1l.12,0c-1.31-10.63-4.3-16.44-6.63-19.44a14.07,14.07,0,0,0-3.52-3.34,18.29,18.29,0,0,0-2.15,1.32l-.29-.4a16.53,16.53,0,0,1,1.94-1.22,5.72,5.72,0,0,0-.71-.34c-1.17.63-8.34,4.87-11.19,15.25-5,18.25,6.84,41.57,17.76,58l.6-.57c-.25-.37-.49-.74-.73-1.11l.42-.27c.22.34.45.68.67,1,9.57-9.15,16.38-15.72,16.8-16.28C232.36,76.76,231.36,74.6,231.18,74.23Zm-33-41.32.46.21a27.8,27.8,0,0,0-1.13,2.75l-.47-.16A28.77,28.77,0,0,1,198.14,32.91Zm-1.73,4.72.48.13c-.25.94-.46,1.92-.63,2.91l-.49-.08C195.94,39.58,196.15,38.59,196.41,37.63Zm-.91,4.95.5.05c-.1,1-.17,2-.19,3h-.5C195.33,44.57,195.4,43.56,195.5,42.58Zm-.18,5h.5c0,1,.08,2,.18,3l-.5,0C195.4,49.6,195.34,48.59,195.32,47.6Zm.41,5,.5-.07c.13,1,.29,2,.48,3l-.49.09C196,54.58,195.86,53.58,195.73,52.61Zm1.64,7.86c-.27-1-.52-2-.74-2.92l.49-.11c.21.94.46,1.92.73,2.89Zm1.49,4.78c-.34-1-.65-1.92-.94-2.86l.48-.14c.29.93.6,1.89.93,2.84Zm1.77,4.69c-.39-1-.75-1.89-1.09-2.8L200,67c.34.91.71,1.85,1.09,2.79Zm-1.11-38.57-.44-.25a24.52,24.52,0,0,1,1.68-2.52l.4.3A24.6,24.6,0,0,0,199.52,31.37Zm3.12,43.16c-.42-.91-.84-1.84-1.23-2.74l.46-.2c.39.9.8,1.82,1.22,2.73Zm-.23-47.16L202,27a22.83,22.83,0,0,1,2.16-2.13l.33.38A24.44,24.44,0,0,0,202.41,27.37ZM204.85,79c-.47-.91-.92-1.81-1.35-2.69l.45-.22c.43.88.87,1.77,1.34,2.68Zm2.37,4.41q-.75-1.34-1.44-2.64l.44-.23c.46.86.94,1.73,1.43,2.62Zm2.51,4.33c-.52-.88-1-1.74-1.52-2.59l.43-.25c.49.85,1,1.71,1.52,2.58ZM212.37,92c-.55-.86-1.08-1.71-1.6-2.54l.43-.27c.52.84,1.05,1.69,1.59,2.54Z"></path>
      <path d="M282.43,112.89l-2.25,3.88a16.5,16.5,0,0,1,2.32.76l-.19.47a15.43,15.43,0,0,0-2.39-.78l-.12.22c8.93,2.52,16.56,14,17.61,15.63l.39.07c0-.07-.07-.15-.11-.22l.43-.24.27.49a2.9,2.9,0,0,0,3.14-2.84C299.15,114.65,284.67,113,282.43,112.89Zm4.22,7.46a24.12,24.12,0,0,0-2.55-1.52l.23-.45a27.09,27.09,0,0,1,2.6,1.56Zm3.85,3.12c-.73-.69-1.49-1.35-2.25-2l.31-.39c.77.61,1.54,1.27,2.28,2Zm3.33,3.67c-.62-.78-1.27-1.54-1.94-2.26l.37-.34c.68.73,1.34,1.5,2,2.29Zm2.85,4.07c-.53-.85-1.08-1.69-1.65-2.48l.4-.29c.58.8,1.14,1.65,1.67,2.51Z"></path>
      <path d="M281.6,112.32l-2.84,4.9c-9.94-.92-21.22-12.89-23-14.83l4.5-7.39C266.17,98.86,280.14,108.6,281.6,112.32Z"></path>
      <path d="M278.94,118.25c-10.18-.76-21.31-12.34-23.7-15l-.11.17-.41-.77a1.47,1.47,0,0,0-.49-.35,6.54,6.54,0,0,0-3-.43c-1.11.25-7.5,6.52-16.26,15.56.37.36.94.91,1.68,1.6l-.34.37c-.75-.7-1.31-1.25-1.68-1.61-.25.25-.5.52-.75.78,4.16,4.07,36.79,34.5,62.52,14.78C295,131.19,287.33,120.2,278.94,118.25Zm-38.82,4.49c-.78-.64-1.55-1.3-2.29-2l.33-.37c.74.65,1.51,1.31,2.28,2Zm3.94,3.11c-.8-.59-1.6-1.21-2.39-1.84l.32-.39c.78.62,1.58,1.24,2.37,1.83Zm4.09,2.91c-.82-.55-1.65-1.13-2.47-1.72l.29-.4c.81.58,1.64,1.15,2.46,1.7Zm4.25,2.67c-.84-.5-1.71-1-2.57-1.57l.27-.43c.86.55,1.71,1.07,2.56,1.57Zm4.42,2.4c-.89-.45-1.79-.92-2.67-1.41l.24-.43c.88.48,1.77.95,2.65,1.39Zm4.57,2.06c-.91-.37-1.84-.77-2.76-1.19l.21-.46c.91.42,1.83.82,2.74,1.19Zm4.74,1.66c-.94-.27-1.91-.59-2.87-.94l.17-.47c1,.34,1.91.66,2.84.94Zm4.89,1.17c-1-.17-2-.39-2.95-.63l.12-.49c1,.25,1.95.46,2.92.63Zm5,.55c-1,0-2-.12-3-.25l.06-.5c1,.13,2,.21,3,.25Zm2,0v-.5a29.23,29.23,0,0,0,3-.19l.05.49A29.82,29.82,0,0,1,278,139.29Zm5-.49-.09-.49a28.25,28.25,0,0,0,2.89-.69l.14.48A29.23,29.23,0,0,1,283,138.8Zm4.85-1.33-.17-.47a28.37,28.37,0,0,0,2.73-1.17l.22.45C289.77,136.72,288.83,137.12,287.89,137.47Zm4.31-2.57c.85-.49,1.69-1,2.51-1.61l.29.41c-.83.59-1.69,1.14-2.55,1.63Z"></path>
      <path d="M270.24,140.34,263.4,165c-11,1.24-21.44,2.12-31.17,2.53l14.61-37.25C253.34,134.53,261.54,138.76,270.24,140.34Z"></path>
      <path d="M233.24,162.16l-2.1,5.36c-15.89.6-29.72-.15-40.34-2.87l4.9-5.34c7.75,2.31,15.43,3.06,26.09,3.06C225.25,162.37,229.05,162.29,233.24,162.16Z"></path>
      <path d="M240.65,143.27l-7,17.88c-17,.54-27.12.25-37.18-2.66,4.37-4.74,9-9.72,13.61-14.69,1.19.1,7,.57,14.14.57A108.39,108.39,0,0,0,240.65,143.27Z"></path>
      <path d="M237.47,68.22l-5.87,5,.36.39.07.1c.07.13,1.59,3,.13,5.06-1.28,1.79-63.69,60.88-69.38,66.26l.81.93,2-1.95.34.36-2,2c6.11,6.86,12.14,12.41,17.56,15a46.53,46.53,0,0,0,6.8,2.59c.28-.32.75-.83,1.56-1.71l.37.34-1.41,1.53.9.26c10.77-11.76,58.22-63.34,61.51-63.46a7.41,7.41,0,0,1,3.46.54,2.24,2.24,0,0,1,.38.22l4.53-7.45C255.37,77.4,239.74,69.31,237.47,68.22ZM167.41,143l-.34-.36,2.17-2.09.35.36Zm3.62-3.48-.34-.36,2.16-2.09.35.36Zm3.62-3.48-.35-.36,2.17-2.09.34.36Zm3.61-3.48-.35-.36,2.17-2.09.34.36Zm3.6-3.48-.34-.36,2.16-2.08.35.36Zm3.61-3.47-.34-.36,2.16-2.09.35.36Zm47.07-52.31.38-.33c.23.27.47.52.7.77l0,.06a6.62,6.62,0,0,1,.64,1.91l-.49.09a6.41,6.41,0,0,0-.58-1.74Zm-23.64,29,.35.36-2.16,2.09-.35-.36Zm-3.6,3.49.35.36-2.16,2.09-.35-.36Zm-3.59,3.47.34.36-2.16,2.09-.35-.36Zm-3.61,3.48.35.36-2.16,2.09-.35-.36Zm-3.6,3.48.35.36-2.16,2.09-.35-.36Zm-5.42,5.93-.35-.36,2.17-2.09.34.36Zm2.49,39-.36-.34,2-2.22.37.34Zm3.41-3.69-.37-.34,2-2.21.37.34Zm3.41-3.68-.37-.34,2-2.21.37.34Zm3.41-3.67-.37-.35,2-2.2.37.34Zm3.41-3.67-.36-.34,2.05-2.2.36.34Zm3.42-3.67-.36-.34,2-2.2.37.35Zm1.71-41.87,2.16-2.09.35.36-2.16,2.09Zm1.71,38.22-.36-.35,2.06-2.19.36.34Zm1.89-41.71,2.16-2.09.35.36-2.16,2.09Zm1.54,38.05-.36-.34,2.06-2.19.36.34Zm2.06-41.53,2.15-2.1.35.36-2.15,2.09Zm1.38,37.89-.37-.35,2.07-2.18.36.34Zm2.21-41.39,2.16-2.1.35.36-2.16,2.1Zm1.23,37.75-.36-.35,2.07-2.18.36.35Zm2.36-41.25,2.15-2.1.35.35c-.67.67-1.39,1.37-2.15,2.11Zm1.09,37.62-.36-.35,2.07-2.17.37.34Zm2.5-41.13,2.15-2.12.35.36-2.15,2.12Zm1,37.51-.36-.35,2.09-2.17.35.35Zm2.61-41c1.14-1.14,1.45-1.49,1.52-1.58a2.43,2.43,0,0,0,.33-.64l.47.16a3.2,3.2,0,0,1-.4.78c-.07.09-.3.37-1.56,1.64Zm.87,37.44-.36-.35c.71-.73,1.4-1.46,2.09-2.16l.36.35C234.15,115.81,233.46,116.53,232.75,117.27Zm3.49-3.6-.36-.35,2.11-2.14.36.35Zm3.51-3.57-.35-.35,2.13-2.13.35.36Zm3.56-3.53-.35-.36,2.17-2.09.35.36Zm3.63-3.46-.34-.37c.93-.85,1.7-1.52,2.29-2l.31.39C248.62,101.6,247.86,102.27,246.94,103.11Zm6.64-2.35a5.87,5.87,0,0,0-2.64-.47h-.17v-.5h.18a6.57,6.57,0,0,1,2.87.52Z"></path>
      <path d="M321.47,158.1a1.38,1.38,0,0,1-.51.87c-58.4,9.8-115.86,17.18-140.88,5-13.43-6.52-30.7-31-43.31-48.89-3.59-5.09-6.69-9.48-9.18-12.72C114.38,85.23,106,79,88.85,68.74l.17,0c17.08,9,29.51,19,39.17,31.58,2.48,3.22,5.58,7.61,9.16,12.68,12.67,18,30,42.58,43.69,49.22a50.55,50.55,0,0,0,8.8,3.19l.12.11.06-.06c8.14,2.17,18.51,3.25,31.31,3.25q8.32,0,18-.61c26.1-1.63,56.06-6.28,82-10.62A1.11,1.11,0,0,1,321.47,158.1Z"></path>
      <path d="M175.46,131.64l-6.89,6.53c-6.5-7.48-12.59-15.83-17.75-23.12l6.92-3.08C159.64,114.23,171.55,128.27,175.46,131.64Z"></path>
      <path d="M167.84,138.86l-5.71,5.41c-6.75-7.84-13.51-17.07-19.54-25.55l7.3-3.25C155.09,122.83,161.26,131.28,167.84,138.86Z"></path>
      <path d="M82.41,161.59c-15.15,2.11-32.8-1.27-35.95-1.92l.76-3.37a120.9,120.9,0,0,0,24.63,2.75,75.6,75.6,0,0,0,10.38-.68Z"></path>
      <path d="M78.38,69.6c-2,4.44,3.28,80.39,3.79,87.78-15.11,2.11-31.76-1.38-34.74-2.06,1.09-5.36,10.87-54,12.11-66a7,7,0,0,0-.87-4.18c-5.44-9.68-26.07-35-31.2-41.22C34.26,46.35,59.7,55.6,73.06,61.27c4.48,1.89,8.68,3.83,12.66,5.82C81.67,66.51,79.4,67.32,78.38,69.6Z"></path>
      <path d="M139,85.22l-7.35,3c-7.49-8-18.79-18.1-27.29-22.84C88.79,53.76,33.92,35.31,26.84,33c4.49-.94,23.77.6,74.35,24.16C124.9,69.47,136.72,82.52,139,85.22Z"></path>
      <path d="M130.68,88.63,122.37,92C113.69,82.83,103,75,89.46,67.88v0l-.09,0c-4.92-2.58-10.2-5.07-15.93-7.5-14.86-6.29-44.58-17-47.16-17.94-.42-.89-2.29-5.32-.5-9l.09-.1-.11.35c.61.2,61.61,20.27,78,32.54l.3-.4-.24.44C112.17,70.87,123.23,80.73,130.68,88.63Z"></path>
      <path d="M208,88.47l-66,29.42-3.83-5.42c-3.59-5.09-6.69-9.49-9.18-12.72-1.86-2.41-3.83-4.71-5.89-7L196.24,63A115.42,115.42,0,0,0,208,88.47Z"></path>
    </svg>
      </div>
      <div class="header-container">
        <span>cruise color splash</span>
        <div class="dropdown first" data-dropdown=1>
          <span data-dropdown=1>shoes</span>
          <div class="dropdown-content-1" data-dropdown-content=1>
            <ul >
              <li>boots</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li>loafers</li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li>mules</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li>sandals</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li>pumps</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="dropdown second" data-dropdown=2>
            <span data-dropdown=2>accessoires</span>
            <div class="dropdown-content-2" data-dropdown-content=2>
              <ul>
                <li>hip belts</li>
              </ul>
              <ul>
                <li>waist belts</li>
              </ul>
              <ul>
                <li>key hanger</li>
              </ul>
            </div>
          </div>
          <div class="dropdown third" data-dropdown=3>
            <span data-dropdown=3>mariée</span>
            <div class="dropdown-content-3" data-dropdown-content=3>
              <ul>
                <li>impress the groom</li>
              </ul>
              <ul>
                <li>halfway the party</li>
              </ul>
              <ul>
                <li>the last dance</li>
              </ul>
            </div>
          </div>
          <div class="dropdown fourth" data-dropdown=4>
            <span data-dropdown=4>maision</span>
            <div class="dropdown-content-4" data-dropdown-content=4>
              <ul>
                <li>tableware</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li>coffee & tea</li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li>vases</li>
              </ul>
              <ul>
                <li>objects</li>
                <li>bookstands</li>
                <li>pose clés</li>
                <li>sushi stick holder</li>
              </ul>
            </div>
            </div>
            <div class="dropdown fifth" data-dropdown=5>
              <span data-dropdown=5>more</span>
              <div class="dropdown-content-5" data-dropdown-content=5>
                <ul>
                  <li>giftcard</li>
                </ul>
                <ul>
                  <li>the world of</li>
                </ul>
                <ul>
                  <li>stores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="signs">
      <svg class="currency-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="currentColor">
        <path id="Icon_material-euro-symbol" data-name="Icon material-euro-symbol" d="M630,735a194.41,194.41,0,0,1-172.8-105H630V570H437.4a188.64,188.64,0,0,1,0-60H630V450H457.19c49.5-95.4,167-132.62,262.38-83.13a194.78,194.78,0,0,1,37.32,25.25L810,339c-110.78-99.49-281.23-90.33-380.72,20.45A269.59,269.59,0,0,0,375.6,450H270v60h91.8a250.82,250.82,0,0,0,0,60H270v60H375.6C425.08,770.39,579,844.12,719.46,794.64A269.62,269.62,0,0,0,810,741l-53.41-53.11A192.16,192.16,0,0,1,630,734.93Z"></path>
	    </svg>
      <svg class="profile-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="currentColor">
        <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M540,220.5a134.83,134.83,0,1,1-.34,0Zm0,639a324,324,0,0,1-270-145C271.36,625,450,575.94,540,575.94c89.55,0,268.66,49,270,138.61A324,324,0,0,1,540,859.5Z"></path>
      </svg>
      <svg class="search-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="currentColor">
        <path id="Icon_material-search" data-name="Icon material-search" d="M656.08,609.87H631.8l-8.63-8.33c72.23-84.15,62.57-210.92-21.58-283.16S390.67,255.81,318.44,340,255.87,550.89,340,623.12a200.79,200.79,0,0,0,261.57,0l8.34,8.63V656l154.21,154L810,764.2Zm-185.07,0A138.81,138.81,0,1,1,609.82,471.06h0A138.63,138.63,0,0,1,471.38,609.87Z"></path>
	    </svg>
      <svg class="favs-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="currentColor">
        <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M540,787.7l-39.14-35.64C361.8,626,270,542.83,270,440.8A147,147,0,0,1,415.57,292.3h2.93a161.72,161.72,0,0,1,121.38,56.43A161.68,161.68,0,0,1,661.37,292.3,147,147,0,0,1,810,437.74q0,1.53,0,3.06C810,542.85,718.2,626,579.16,752.36Z"></path>
      </svg>
      <svg class="cart-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="currentColor">
        <path id="Icon_material-shopping-cart" data-name="Icon material-shopping-cart" d="M432,702a54,54,0,1,0,54,54A54,54,0,0,0,432,702ZM270,270v54h54l97.2,204.93-36.45,66.15A52.2,52.2,0,0,0,378,621a54.16,54.16,0,0,0,54,54H756V621H443.34a6.69,6.69,0,0,1-6.75-6.64v-.11l.81-3.24,24.3-44H662.85a53.76,53.76,0,0,0,47.25-27.81L806.76,364A26.41,26.41,0,0,0,810,351a27,27,0,0,0-27-27H383.67l-25.38-54ZM702,702a54,54,0,1,0,54,54A54,54,0,0,0,702,702Z"></path>
	    </svg>
      </div>
    </nav>
  </header>
    `
};

const welcomeContent = () => {
  return `
    <section class="welcome">
    <div class="moro-welcome">
      <svg
      class="moro-intro"
      id="moro-welcome"
      data-name="moro-welcome"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1417.32 284.51"
              fill="currentColor">
              <defs>
                <clipPath id="clip-path">
                  <rect
                    style="fill: currentColor"
                    x="14.17"
                    y="14.17"
                    width="1388.98"
                    height="256.16"></rect>
                </clipPath>
              </defs>
              <g style="clip-path: url(#clip-path)">
                <path
                  d="M503.84,78C455.56,29.75,383.7,39.46,343.35,79.79c-41.87,41.89-44.75,114-.66,158.06,48.28,48.27,120.15,38.58,160.48-1.76,41.89-41.88,44.76-114,.67-158.06m-31.31,140.2c-39.89,39.9-87.95,47.38-120.12,15.21C314.71,195.75,340.49,131.16,374,97.66c39.89-39.91,88-47.41,120.13-15.23,37.7,37.7,11.9,102.29-21.6,135.8"></path>
                <path
                  d="M681.22,157.63c24.33-7.17,44.28-26.82,44.28-53.32,0-22.12-13.1-55.16-72-55.16-20,0-30.87.63-41.78.63-6.32,0-12.6-.07-19-.16V266.24c5.6-.07,11.19-.13,16.83-.13,4.58,0,9.15.09,13.72.18V163.87h28.37c22.44,35.22,43.33,71.7,71.71,102.87,8.72-.31,17.76-.63,26.49-.63,2.6,0,5.2.09,7.81.18-21.07-28.47-55-77.32-76.4-108.66m-41.46-3.74a92.35,92.35,0,0,1-16.52-1.57V61a102.56,102.56,0,0,1,18.7-1.86c36.8,0,51.12,19.94,51.12,47.06,0,22.45-14.95,47.7-53.3,47.7"></path>
                <path
                  d="M988.56,78C940.29,29.75,868.43,39.46,828.09,79.8c-41.88,41.87-44.74,114-.67,158,48.29,48.29,120.14,38.58,160.49-1.75,41.88-41.89,44.74-114,.65-158.06M837.13,233.44c-37.7-37.7-11.9-102.28,21.59-135.79,39.91-39.89,88-47.39,120.15-15.2,37.7,37.68,11.91,102.27-21.6,135.78-39.89,39.91-87.94,47.38-120.14,15.21"></path>
                <path
                  d="M1147.56,149.84v-.63c24-5.61,50.19-20.58,50.19-49.57,0-43.95-49.57-50.5-72.64-50.5-11.22,0-22.76.63-40.52.63h-7.17V266.24c4.14-.06,8.3-.13,12.47-.13,14.66,0,29.29.63,44,.63,55.17,0,83.84-25.25,83.84-58.61,0-43.95-46.75-59.55-70.13-58.29M1108,59.74c4.68-.31,9-.62,13.09-.62,24.94,0,46.13,5.29,46.13,41.16,0,39.27-22.12,47.37-47.38,47.37H1108Zm28.06,197c-28.06,0-28.06-11.52-28.06-25.55V157.63h18.71c30.85,0,58.6,10,58.6,54.56,0,19.32-12.17,44.57-49.25,44.57"></path>
                <path
                  d="M1298.44,256.76V160.44h72.41c0-1.64,0-9.93,0-12.79h-72.4V59.12H1391V49.67H1267.89V266.25H1401c.64-3.34,1.39-6.17,2.15-9.49Z"></path>
              </g>
              <polygon
                points="1391.01 14.18 1267.88 23.94 1267.88 33.38 1391.01 23.61 1391.01 14.18"></polygon>
                <g style="clip-path: url(#clip-path)">
                  <path
                  d="M223,49.76C209,81.68,167.1,168.54,131.56,241.5L40.05,49.71H14.17V266.17c2.09,0,0-.06,1.23-.06,2.3,0,7.34,0,9.65.08V92.79h.64c29.14,58,58.56,115.38,84.75,174h21a5.76,5.76,0,0,0,.21-.55l87-180.26h.61v180.3l29.16-.06V49.77Z"></path>
                </g>
      </svg>
    </div>
  </section>
  `
}

const productContent = () => {
  return `
    <div class="article-container">
      <article class="products platforms" data-content-id="01">
      <div class="col-01wrapper">
        <a href="">
            <div class="col-01-image_01">
              <div class="col-text">
                <p>SELMA 02 GREEN STRUZZO</p>
                <div class="product">
                  <span>480,-</span>
                  <div class="svg-container">
                    <svg
                      class="arrow-rigth"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.49 31.49"
                      style="enable-background: new 0 0 31.49 31.49"
                      xml:space="preserve"
                      fill="currentColor"
                    >
                      <path
                        d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <a href="">
            <div class="col-01-image_02">
              <div class="col-text">
                <p>TERESA 02 CAMEL STRUZZO</p>
                <div>
                <span>480,-</span>
                <div class="svg-container">
                  <svg
                    class="arrow-rigth"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.49 31.49"
                    style="enable-background: new 0 0 31.49 31.49"
                    xml:space="preserve"
                    fill="currentColor"
                  >
                    <path
                      d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                    ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        <div></div>
      </div>
      <div class="col-02">
        <p>
          We believe it’s time for the muse to reclaim her power. To
          unapologetically be herself and manifest the life she wants to lead.
          And you can take ‘lead’ pretty literally, here, because the right pair
          of shoes doesn’t just elevate an outfit—it changes the way you face
          the world.
        </p>
        <div class="link-wrapper">
          <div class="platforms switch active" data-id="01">platforms</div>
          <div class="heels switch" data-id="02">heels</div>
          <div class="flats switch" data-id="03">flats</div>
        </div>
      </div>
      <div class="col-02wrapper">
        <a href="">
          <div class="col-03-image_01">
            <div class="col-text">
              <p>TERESA 05 BLACK LEATHER</p>
              <p>580,-</p>
              <div class="svg-container">
                <svg
                  class="arrow-rigth"
                  x="0px"
                  y="0px"
                  viewBox="0 0 31.49 31.49"
                  style="enable-background: new 0 0 31.49 31.49"
                  xml:space="preserve"
                  fill="currentColor"
                >
                  <path
                    d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div class="col-03-image_02">
            <div class="col-text">
              <p>EDITH 41 TANGERINE</p>
              <p>560,-</p>
              <div class="svg-container">
                <svg
                  class="arrow-rigth"
                  x="0px"
                  y="0px"
                  viewBox="0 0 31.49 31.49"
                  style="enable-background: new 0 0 31.49 31.49"
                  xml:space="preserve"
                  fill="currentColor"
                >
                  <path
                    d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
        </div>
  </article>

  <article class="products heels hidden" data-content-id="02">
    <div class="col-01wrapper">
      <a href="">
          <div class="col-01-image_01">
            <div class="col-text">
              <p>PENNY 10 SUNFLOWER</p>
              <div class="product">
                <span>480,-</span>
                <div class="svg-container">
                  <svg
                    class="arrow-rigth"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.49 31.49"
                    style="enable-background: new 0 0 31.49 31.49"
                    xml:space="preserve"
                    fill="currentColor"
                  >
                    <path
                      d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        <a href="">
          <div class="col-01-image_02">
            <div class="col-text">
              <p>PENNY 10 SUNFLOWER</p>
              <div>
              <span>480,-</span>
              <div class="svg-container">
                <svg
                  class="arrow-rigth"
                  x="0px"
                  y="0px"
                  viewBox="0 0 31.49 31.49"
                  style="enable-background: new 0 0 31.49 31.49"
                  xml:space="preserve"
                  fill="currentColor"
                >
                  <path
                    d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                  ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      <div></div>
    </div>
    <div class="col-02">
      <p>
        We believe it’s time for the muse to reclaim her power. To
        unapologetically be herself and manifest the life she wants to lead.
        And you can take ‘lead’ pretty literally, here, because the right pair
        of shoes doesn’t just elevate an outfit—it changes the way you face
        the world.
      </p>
      <div class="link-wrapper">
        <div class="platforms switch" data-id="01">platforms</div>
        <div class="heels switch active" data-id="02">heels</div>
        <div class="flats switch" data-id="03">flats</div>
      </div>
    </div>
    <div class="col-02wrapper">
      <a href="">
        <div class="col-03-image_01">
          <div class="col-text">
            <p>PENNY 10 SUNFLOWER</p>
            <p>480,-</p>
            <div class="svg-container">
              <svg
                class="arrow-rigth"
                x="0px"
                y="0px"
                viewBox="0 0 31.49 31.49"
                style="enable-background: new 0 0 31.49 31.49"
                xml:space="preserve"
                fill="currentColor"
              >
                <path
                  d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
      <a href="">
      <div class="col-03-image_02">
      <div class="col-text">
            <p>MIMI 38 BLUSH</p>
            <p>390,-</p>
            <div class="svg-container">
              <svg
                class="arrow-rigth"
                x="0px"
                y="0px"
                viewBox="0 0 31.49 31.49"
                style="enable-background: new 0 0 31.49 31.49"
                xml:space="preserve"
                fill="currentColor"
              >
                <path
                  d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
      </div>
  </article>
  <article class="products flats hidden" data-content-id="03">
  <div class="col-01wrapper">
    <a href="">
        <div class="col-01-image_01">
          <div class="col-text">
            <p>MYSTIQUE 06 WHITE ECO</p>
            <div class="product">
              <span>280,-</span>
              <div class="svg-container">
                <svg
                  class="arrow-rigth"
                  x="0px"
                  y="0px"
                  viewBox="0 0 31.49 31.49"
                  style="enable-background: new 0 0 31.49 31.49"
                  xml:space="preserve"
                  fill="currentColor"
                >
                  <path
                    d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <a href="">
        <div class="col-01-image_02">
          <div class="col-text">
            <p>MYSTIQUE 03 GOLD ECO</p>
            <div>
            <span>280,-</span>
            <div class="svg-container">
              <svg
                class="arrow-rigth"
                x="0px"
                y="0px"
                viewBox="0 0 31.49 31.49"
                style="enable-background: new 0 0 31.49 31.49"
                xml:space="preserve"
                fill="currentColor"
              >
                <path
                  d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    <div></div>
  </div>
  <div class="col-02">
    <p>
      We believe it’s time for the muse to reclaim her power. To
      unapologetically be herself and manifest the life she wants to lead.
      And you can take ‘lead’ pretty literally, here, because the right pair
      of shoes doesn’t just elevate an outfit—it changes the way you face
      the world.
    </p>
    <div class="link-wrapper">
      <div class="platforms switch" data-id="01">platforms</div>
      <div class="heels switch" data-id="02">heels</div>
      <div class="flats switch active" data-id="03">flats</div>
    </div>
  </div>
  <div class="col-02wrapper">
    <a href="">
      <div class="col-03-image_01">
        <div class="col-text">
          <p>MYSTIQUE 04 SILVER ECO</p>
          <p>280,-</p>
          <div class="svg-container">
            <svg
              class="arrow-rigth"
              x="0px"
              y="0px"
              viewBox="0 0 31.49 31.49"
              style="enable-background: new 0 0 31.49 31.49"
              xml:space="preserve"
              fill="currentColor"
            >
              <path
                d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <a href="">
      <div class="col-03-image_02">
        <div class="col-text">
          <p>MYSTIQUE 06 WHITE ECO</p>
          <p>280,-</p>
          <div class="svg-container">
            <svg
              class="arrow-rigth"
              x="0px"
              y="0px"
              viewBox="0 0 31.49 31.49"
              style="enable-background: new 0 0 31.49 31.49"
              xml:space="preserve"
              fill="currentColor"
            >
              <path
                d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
    </div>
  </article> 
</div> 
<div class="products-mobile link-wrapper">
<div class="platforms switch" data-id="01">platforms</div>
<div class="heels switch active" data-id="02">heels</div>
<div class="flats switch" data-id="03">flats</div>
</div>
    `
};

const loaderSection = () => {
  return `
    <section class="loader">
        <p>loading...</p>
        <div class="loader-frame">
          <div class="loader-progress"></div>
      </div>  
    </section>
  `
}

//Barna's section ends

//Florian section
const swiperWrapper = () => {
  return `
  <div class="photo-container">
      <h3 class="h3-hs">HERO STYLES</h3>
      <div class="photo-block">
          <div class="col1">
              <a href="https://www.morobe.com/products/silver-sandals-high-heel-susan-01-3648"><img class="img1"></img></a>
           </div>
           <div class="col2">
              <a href="https://www.morobe.com/products/silver-sandals-high-heel-susan-01-3648"><img class="img2"></img></a>
          </div>
          <div class="col3">
              <a href="https://www.morobe.com/products/sunflower-sandals-high-heel-penny-10-3640"><img class="img3"></img></a>
          </div>
          <div class="col4">
              <a href="https://www.morobe.com/products/apple-pumps-high-heel-patty-03-3663"><img class="img4"></img></a>
          </div>
      </div>
  </div>
  `
}

//Lilla section start

const runningTextComponent = () => {
  return `
  <div class="header-pos"></div>
    <div class="running-text top displayed">
    <a href="www.morobe.com">
        <div class="marquee">
            <div>
                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>
            </div>
        </div>
  </a>
  </div>`
}

let newDAndR = () => {
  return `
  <div class="NewDropsAndRestocks">
      <section>
          <div class="NDR_sections">
              <div class="NDR_section1_wrapper">

                  <div class="NDR_section1_header_wrapper">
                      <h5 class="NDR_section1_heading">
                          NEW DROPS & RESTOCKS
                      </h5>
                  </div>

                  <div class="NDR_section1_image_wrapper">
                      <img class="img1 img1-loaded" src="images/newdrops_restocks4_1200x.jpeg">
                      <span> </span>
                  </div>

              </div>

              <div class="NDR_section2_wrapper">
                  <div class="NDR_section_content">
                      <p class="p">
                          Fiercely elegant. Playfully sophisticated. Classically contemporary. Every pair of <a href="morobe.com"> MOROBÉ shoes </a> is an to the fundamental contradictions of feminity. Wheter you prefer our signature styles or the trends that flow with the seasons, you're getting aesthetics with tons of attitude.
                      </p>
                  </div>

                  <div class="NDR_section2_image_wrapper">
                      <img class="img2" src="images/newdrops_restocks3_1200x.jpeg">

                      <span class="image_loader">
                      </span>
                  </div>
              </div>
          </div>

          <div class="running-text">
              <a href="www.morobe.com">
                  <div class="marquee">
                      <div>
                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>

                          <span>- SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS - SHOP NEW DROPS</span>
                      </div>
                  </div>
          </a>
          </div>

      <button>
          <a href="www.morobe.com"> SHOP NEW DROPS</a>            
      </button>

      </section>
  </div>
  `
}

//Lilla section end

//Andi section
const cruiseColor = () => {
  return `
  <div>
    <div class="maindiv">
      <div class="firstdiv">
        <div class="title1">
          <h2>
          CRUISE COLOR<br>
          SPLASH
          </h2>
        </div>
        <div class="title2">
          <h3 class="h3andi">OWN THE SPOTLIGHT</h3>
        </div>
        <div class="paragraph">
          <p>
          This season is all about a return to optimism through flashy colors and proportions. Add some vibrance to your wardrobe!
          </p>
        </div>
        <div class="button">
          DISCOVER YOUR COLOR
        </div>
      </div>
      <div class="seconddiv">
      </div>
    </div>
  </div>
  <div class="cruise-mobile">
    <div class="title1">
      <h2>
      CRUISE COLOR SPLASH
      </h2>
    </div>
    <div class="seconddiv"></div>
    <div class="button">
      DISCOVER YOUR COLOR
    </div>
  `
}
//Andi section end

const pictureContent = () => {
  return `
    <img src="">
    `
};
//Kriszti section
const footerContent = () => {
  return `
  <footer id="section-footer">
  <div class="MorobeImage">
    <svg
    id="Laag_1"
    data-name="Laag 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1417.32 284.51">
            <defs>
              <clipPath id="clip-path">
                <rect
                  style="fill: none"
                  x="14.17"
                  y="14.17"
                  width="1388.98"
                  height="256.16"></rect>
              </clipPath>
            </defs>
            <g style="clip-path: url(#clip-path)">
              <path
                style="fill: #1d1d1b"
                d="M503.84,78C455.56,29.75,383.7,39.46,343.35,79.79c-41.87,41.89-44.75,114-.66,158.06,48.28,48.27,120.15,38.58,160.48-1.76,41.89-41.88,44.76-114,.67-158.06m-31.31,140.2c-39.89,39.9-87.95,47.38-120.12,15.21C314.71,195.75,340.49,131.16,374,97.66c39.89-39.91,88-47.41,120.13-15.23,37.7,37.7,11.9,102.29-21.6,135.8"></path>
              <path
                style="fill: #1d1d1b"
                d="M681.22,157.63c24.33-7.17,44.28-26.82,44.28-53.32,0-22.12-13.1-55.16-72-55.16-20,0-30.87.63-41.78.63-6.32,0-12.6-.07-19-.16V266.24c5.6-.07,11.19-.13,16.83-.13,4.58,0,9.15.09,13.72.18V163.87h28.37c22.44,35.22,43.33,71.7,71.71,102.87,8.72-.31,17.76-.63,26.49-.63,2.6,0,5.2.09,7.81.18-21.07-28.47-55-77.32-76.4-108.66m-41.46-3.74a92.35,92.35,0,0,1-16.52-1.57V61a102.56,102.56,0,0,1,18.7-1.86c36.8,0,51.12,19.94,51.12,47.06,0,22.45-14.95,47.7-53.3,47.7"></path>
              <path
                style="fill: #1d1d1b"
                d="M988.56,78C940.29,29.75,868.43,39.46,828.09,79.8c-41.88,41.87-44.74,114-.67,158,48.29,48.29,120.14,38.58,160.49-1.75,41.88-41.89,44.74-114,.65-158.06M837.13,233.44c-37.7-37.7-11.9-102.28,21.59-135.79,39.91-39.89,88-47.39,120.15-15.2,37.7,37.68,11.91,102.27-21.6,135.78-39.89,39.91-87.94,47.38-120.14,15.21"></path>
              <path
                style="fill: #1d1d1b"
                d="M1147.56,149.84v-.63c24-5.61,50.19-20.58,50.19-49.57,0-43.95-49.57-50.5-72.64-50.5-11.22,0-22.76.63-40.52.63h-7.17V266.24c4.14-.06,8.3-.13,12.47-.13,14.66,0,29.29.63,44,.63,55.17,0,83.84-25.25,83.84-58.61,0-43.95-46.75-59.55-70.13-58.29M1108,59.74c4.68-.31,9-.62,13.09-.62,24.94,0,46.13,5.29,46.13,41.16,0,39.27-22.12,47.37-47.38,47.37H1108Zm28.06,197c-28.06,0-28.06-11.52-28.06-25.55V157.63h18.71c30.85,0,58.6,10,58.6,54.56,0,19.32-12.17,44.57-49.25,44.57"></path>
              <path
                style="fill: #1d1d1b"
                d="M1298.44,256.76V160.44h72.41c0-1.64,0-9.93,0-12.79h-72.4V59.12H1391V49.67H1267.89V266.25H1401c.64-3.34,1.39-6.17,2.15-9.49Z"></path>
            </g>
            <polygon
              style="fill: #1d1d1b"
              points="1391.01 14.18 1267.88 23.94 1267.88 33.38 1391.01 23.61 1391.01 14.18"></polygon>
              <g style="clip-path: url(#clip-path)">
                <path
                style="fill: #1d1d1b"
                d="M223,49.76C209,81.68,167.1,168.54,131.56,241.5L40.05,49.71H14.17V266.17c2.09,0,0-.06,1.23-.06,2.3,0,7.34,0,9.65.08V92.79h.64c29.14,58,58.56,115.38,84.75,174h21a5.76,5.76,0,0,0,.21-.55l87-180.26h.61v180.3l29.16-.06V49.77Z"></path>
              </g>
    </svg>
  </div>
  <div class="FooterBlockLinks">
    <ul class="LinklistAsRow">
      <li>
        <a href="">SHIPPING</a>
      </li>
      <li>
        <a href="">RETURNS</a>
      </li>
      <li>
        <a href="">TERMS &amp; CONDITIONS</a>
      </li>
      <li>
        <a href="">PRIVACY POLICY</a>
      </li>
      <li>
        <a href="">CONTACT</a>
      </li>
      <li>
        <a href="">JOBS</a>
      </li>
    </ul>  
    <ul class="SocialLinks">
      <li>
      <a
        href="https://www.facebook.com/morobeshoes"
        target="_blank"
        rel="noopener"
        aria-label="Facebook">
        <svg viewBox="0 0 9 17">
          <path
            d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/virginiemorobe"
        target="_blank"
        rel="noopener"
        aria-label="Twitter">
        <svg
          role="presentation"
          viewBox="0 0 32 26">
          <path
            d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z">
          </path>
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/morobeshoes/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram">
        <svg
          role="presentation"
          viewBox="0 0 32 32">
          <path
            d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z">
          </path>
        </svg>
      </a>
    </li>
    </ul>
  </div>

</footer>
  `
};
//Kriszti section end

const loadEvent = () => {
  const rootEl = document.querySelector('#root');
  const bodyEl = document.querySelector('body');
  bodyEl.classList.add('overflow');

  rootEl.insertAdjacentHTML("beforeend", runningTextComponent());
  rootEl.insertAdjacentHTML("beforeend", headerContent());
  rootEl.insertAdjacentHTML("beforeend", welcomeContent());
  rootEl.insertAdjacentHTML("beforeend", swiperWrapper());
  rootEl.insertAdjacentHTML("beforeend", newDAndR());
  rootEl.insertAdjacentHTML("beforeend", cruiseColor());
  rootEl.insertAdjacentHTML("beforeend", productContent());
  rootEl.insertAdjacentHTML("afterend", footerContent());
  rootEl.insertAdjacentHTML("afterbegin", loaderSection());

  const buttonSwitch = [...document.querySelectorAll('.switch')];
  const navBar = document.querySelector('.navBar');
  const pseudoLoader = document.querySelector('.loader');
  const topRunning = document.querySelector('.top');

  console.log(topRunning);
  const switchContent = event => {
    const products = [...document.querySelectorAll('.products')]
    const target = event.currentTarget;
    const dataId = target.getAttribute('data-id');
    const targetContent = document.querySelector(`[data-content-id="${dataId}"]`);
    products.map(element => element === targetContent ? targetContent.classList.remove('hidden') : element.classList.add('hidden'));
  };

  const addHidden = () => {
    pseudoLoader.classList.add('hidden');
    bodyEl.classList.toggle('overflow');
    console.log('hidden added');
  };

  const switchColor = event => {
    const dropdowns = [...document.querySelectorAll('.dropdown')];
    const header = document.querySelector('.navBar');

    const target = event.target;
    const dataId = target.getAttribute('data-dropdown');
    const targetContent = document.querySelector(`[data-dropdown="${dataId}"]`);
    console.log(dataId, targetContent, target);

    if (targetContent === dropdowns[4]) {
      header.classList.add('red-color');
      header.classList.remove('black-color');
      header.classList.remove('white-color');
    } else if (targetContent === dropdowns[1]) {
      header.classList.add('black-color');
      header.classList.remove('red-color');
      header.classList.remove('white-color');
    } else if (targetContent === dropdowns[2] || targetContent === dropdowns[3] || targetContent === dropdowns[0]) {
      header.classList.add('white-color');
      header.classList.remove('red-color');
      header.classList.remove('black-color');
    } else {
      header.classList.remove('black-color');
      header.classList.remove('white-color');
      header.classList.remove('red-color');
    };
  };

  const scrollHead = () => {
    if (window.pageYOffset > 1) {
      navBar.classList.add('navMoved');
      topRunning.classList.remove('displayed');
    } else {
      navBar.classList.remove('navMoved');
      topRunning.classList.add('displayed');
    }
  };

  setTimeout(() => { addHidden() }, 5300);

  buttonSwitch.map(element => element.addEventListener('click', switchContent));
  window.addEventListener('scroll', scrollHead);
  window.addEventListener('mouseover', switchColor);

};

window.addEventListener('load', loadEvent);