<template>
  <section class="scanner__wrapper">
    <div class="video__wrapper">
      <video ref="video"></video>
      <div class="message" v-if="status === 'canStart'">Можно начинать</div>
      <div class="message" v-else-if="status === 'CameraNotFound'">
        Камера не найдена.
      </div>
    </div>
    <section class="control">
      <button v-on:click="startScan">Сканировать новый QR-код</button>
      <button v-on:click="stopScan">Остановить сканирование</button>
    </section>
    <div>Результат: {{ this.res }}</div>
  </section>
</template>

<script>
import QrScanner from "qr-scanner";

export default {
  data() {
    return {
      qrScanner: {},
      status: "canStart",
      res: "",
      scanMode: false,
    };
  },
  mounted() {
    this.qrScanner = new QrScanner(
      this.$refs.video,
      (result) => {
        this.res = result.data;
      },
      {
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true,
      }
    );
  },
  methods: {
    stopScan() {
      if (this.status != "CameraNotFound") {
        this.qrScanner.pause().then(() => {
          this.status = "canStart";
        });
        this.qrScanner._active = false;
      }
    },
    startScan() {
      this.scanMode = true;
      this.qrScanner
        .start()
        .then(() => {
          this.status = "scanning";
        })
        .catch((e) => {
          if (e === "Camera not found.") this.status = "CameraNotFound";
        });
    },
  },
};
</script>

<style>
.control {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.scanner__wrapper {
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.video__wrapper {
  margin: 0 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
}

.message {
  position: absolute;
}

@media (max-height: 512px) {
  .video__wrapper {
    height: 60vh;
  }
  .control {
    gap: 0.5rem;
  }
  .scanner__wrapper {
    gap: 0.5rem;
  }
}
</style>
