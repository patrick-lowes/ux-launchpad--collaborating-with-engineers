import "./FlexboxBox.css";

const FlexboxBox = ({ children, variant, ...props }) => {
  return (
    <div className="FlexboxBox" style={{ justifyContent: variant }}>
      {children}
    </div>
  );
};

export default FlexboxBox;
