import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart =(props)=>{
    const dataValues = props.dataPoints.map((data)=>data.value);
    const maxValue = Math.max(...dataValues);
    return(
        <div className="chart">
            {props.dataPoints.map((data)=>{
                return <ChartBar 
                    key={data.label}
                    value={data.value}
                    maxValue={maxValue}
                    label={data.label}
                />
            })}
        </div>
    );
}

export default Chart;