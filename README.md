# JellyPlayer

## Modern Jellyfin Client

## Note: The development of this client is on halt as I am waiting for jf-vue project(frontend for this project) to catch up to vue3

## Installation

- Install Requirements:
  - Install Python 3
  - Install dependencies
    - Install node deps for frontend, go to JellyPlayer-FrontEnd dir and run the following command

      ```console
      npm install
      ```

    - Install Python deps

      ```console
      pip3 install -r requirements.txt --default-timeout=1000
      ```

- Run App:
  
  - Complie Renderer Files(html,js,css):\
    Go to JellyPlayer-FrontEnd dir and run.\
    **Note: on windows use WSL to compile**

    ```console
    npm run build 
    ```

  - Run JellyPlayer:

    ```console
    python3 main.py
    ```

<!-- - Build EXE:

  ```console
  pyinstaller --clean main.spec
  ```

  The .exe file will generate at dist/JellyPlayer -->

## Roadmap to Alpha 1

- [ ] Integration of libMPV for video playback (30% completed).
- [ ] Add Jellyplayer specific player function to jf-vue for video playback (1% completed).
- [ ] Use github action workflow to build JellyPlayer for multiple target OS.
