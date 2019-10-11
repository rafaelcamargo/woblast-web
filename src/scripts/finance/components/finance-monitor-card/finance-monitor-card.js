import '@styles/finance-monitor-card.styl';
import ENV from '@environment';
import React, { Component } from 'react';
import chartService from '@scripts/base/services/chart/chart';
import dateService from '@scripts/base/services/date/date';
import financeResource from '@scripts/finance/resources/finance/finance';
import routeService from '@scripts/base/services/route/route';
import { WCard } from '@scripts/base/components/card/card';

export class WFinanceMonitorCard extends Component {
  constructor(props){
    super(props);
    this.chartContainerRef = React.createRef();
    this.state = {};
  }
  onFetch = () => {
    return getItemData();
  }
  onFetchSuccess = data => {
    this.setCardTitle(buildCardTitle(data.name))
    this.setChart(renderChart(this.chartContainerRef.current, data));
    this.setInterval(scheduleChartUpgrade(this.chart));
  }
  setCardTitle(cardTitle){
    this.setState({ cardTitle });
  }
  setChart(chart){
    this.chart = chart;
  }
  setInterval(interval){
    this.interval = interval;
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="w-finance-monitor-card">
        <WCard
          title={ this.state.cardTitle }
          onFetch={ this.onFetch }
          onFetchSuccess={ this.onFetchSuccess }>
          <canvas
            width="800"
            height="300"
            ref={ this.chartContainerRef }>
          </canvas>
        </WCard>
      </div>
    );
  }
}

function getItemData(){
  const { type, key } = routeService.getSearchParams();
  return financeResource.getItem(type, key);
}

function buildCardTitle(itemName){
  return `Monitoring ${itemName} every ${ENV.MONITOR.INTERVAL/1000}s`;
}

function renderChart(containerElement, data){
  return chartService.build(containerElement, {
    type: 'line',
    data: {
      labels: [buildChartLabel()],
      datasets: [{
        data: [data.value],
        label: data.name
      }]
    },
    options: {
      legend: {
        position: 'bottom'
      }
    }
  });
}

function scheduleChartUpgrade(chart){
  return setInterval(() => {
    getItemData().then(data => {
      chartService.addPoint(chart, buildChartLabel(), data.value, {
        maxPoints: ENV.MONITOR.MAX_POINTS
      });
    });
  }, ENV.MONITOR.INTERVAL);
}

function buildChartLabel(){
  const date = dateService.getNow();
  const hours = leadingZero(date.getHours());
  const minutes = leadingZero(date.getMinutes());
  const seconds = leadingZero(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function leadingZero(num){
  return num < 10 ? `0${num}` : num;
}
