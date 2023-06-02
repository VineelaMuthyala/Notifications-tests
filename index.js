const Notification = (props) => {
  const { className, image, text } = props;
  console.log(text);
  return (
    <div className={className}>
      <img className="image" src={image} />
      <p className="name">{text}</p>
    </div>
  );
};

const element = (
  <div>
    <div className="bg-container">
      <h1 className="heading">Notifications</h1>
      <div className="notification-container">
        <Notification
          className="box blue-box"
          text="Information-Message"
          image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
      </div>
      <div className="notification-container">
        <Notification
          className="box green-box"
          text="Success-Message"
          image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
      </div>
      <div className="notification-container">
        <Notification
          className="box yellow-box"
          text="Warning-Message"
          image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
      </div>
      <div className="notification-container">
        <Notification
          className="box red-box"
          text="Error-Message"
          image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
