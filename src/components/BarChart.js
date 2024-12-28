import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import "../components/Styling/BarChart.css"

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

class BarChart extends Component {
  constructor(props) {
    super(props);

    // Initial state to manage the chart data
    this.state = {
      chartData: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Monthly Data',
            data: props.data, // Data passed via props
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1,
            borderRadius: 10, // Rounded corners for bars
            tension: 0.4, // Smoothing the curve if needed
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000, // Duration for the animation
          easing: 'easeInOutQuad', // Easing function
        },
        plugins: {
          title: {
            display: true,
            text: 'Monthly Data Analysis',
            font: {
              size: 20,
            },
            padding: {
              top: 20,
              bottom: 30,
            },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    };
  }

  // Update chart data when props change
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      // Update the chart data only if the data prop has changed
      this.setState({
        chartData: {
          ...this.state.chartData,
          datasets: [
            {
              ...this.state.chartData.datasets[0],
              data: this.props.data, // New data from props
            },
          ],
        },
      });
    }
  }

  render() {
    return (
      <div className='barchart-div'>
        <Bar data={this.state.chartData} options={this.state.chartOptions} />
      </div>
    );
  }
}

export default BarChart;
