<template>
  <div id="container"></div>
</template>

<script>
  import G6 from "@antv/g6"

  export default {
    mounted() {
      this.initG6()
    },
    methods: {
      initG6() {
        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight || 500;
        const graph = new G6.Graph({
          container: 'container',
          width,
          height,
          layout: {
            type: 'force',
          },
          defaultNode: {
            size: 15,
          },
        });

        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
          .then((res) => res.json())
          .then((data) => {
            graph.data({
              nodes: data.nodes,
              edges: data.edges.map(function (edge, i) {
                edge.id = 'edge' + i;
                return Object.assign({}, edge);
              }),
            });
            graph.render();
            var _this = this
            graph.on('node:dragstart', function (e) {
              graph.layout();
              _this.refreshDragedNodePosition(e);
            });
            graph.on('node:drag', function (e) {
              const forceLayout = graph.get('layoutController').layoutMethods[0];
              forceLayout.execute();
              _this.refreshDragedNodePosition(e);
            });
            graph.on('node:dragend', function (e) {
              e.item.get('model').fx = null;
              e.item.get('model').fy = null;
            });

            if (typeof window !== 'undefined')
              window.onresize = () => {
                if (!graph || graph.get('destroyed')) return;
                if (!container || !container.scrollWidth || !container.scrollHeight) return;
                graph.changeSize(container.scrollWidth, container.scrollHeight);
              };
          });
      },
      refreshDragedNodePosition(e) {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
      }
    }
  }

</script>
<style>
  #container {
    width: 100%;
    min-height: 100vh;
  }
</style>
