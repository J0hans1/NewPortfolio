import Circle from "./Circle";

const Circles = () => {
    return (
        <div id="circles" className="sticky">
            <Circle
                size="180px"
                color="linear-gradient(25.74deg, #38C771 8.85%, #6A56E3 85.16%)"
                left="1513"
                top="131"
                topFactor="0.01"
                leftFactor="-0.03"
            />

            <Circle
                size="200px"
                color="linear-gradient(197.74deg, #38C7BE 14.67%, #E3BC56 87.87%)"
                left="1321"
                top="650"
                topFactor="-0.1"
                leftFactor="0.1"
            />

            <Circle
                size="120px"
                color="linear-gradient(313.5deg, #3893C7 20.36%, #6A56E3 90.81%)"
                left="1021"
                top="467"
                topFactor="0.05"
                leftFactor="-0.01"
            />

            <Circle
                size="280px"
                color="linear-gradient(197.74deg, #81D8FD 14.67%, #AEE356 87.87%)"
                top="-78"
                left="-24"
                topFactor="0.02"
                leftFactor="0.01"
            />

            <Circle
                size="260px"
                color="linear-gradient(122.92deg, #81D8FD 14.51%, #D45DE8 90.11%)"
                left="170"
                top="690"
                topFactor="-0.02"
                leftFactor="0.01"
            />
        </div>
    );
};

export default Circles;