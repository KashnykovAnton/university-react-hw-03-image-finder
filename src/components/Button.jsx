const Button = ({ onLoadMore }) => {
  return (
    <div className="Button-div">
      <button className="Button" type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
