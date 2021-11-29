<template>
  <div class="home">
    <a-date-picker @change="onChange" />

    <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      headers: {
        authorization: 'authorization-text'
      }
    };
  },
  mounted() {},
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    fetchHtml() {
      fetch('https://shibsc.com', {
        method: 'GET',
        mode: 'cors'
      }).then(res => {
        console.log(res);
      });
    },
    getMarketData() {
      axios
        .post('https://bsc-dataseed.binance.org/', {
          jsonrpc: '2.0',
          id: 16,
          method: 'eth_call',
          params: [
            {
              data: '0x70a08231000000000000000000000000000000000000000000000000000000000000dead',
              to: '0xdf0816cc717216c8b0863af8d4f0fc20bc65d643'
            },
            'latest'
          ]
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
