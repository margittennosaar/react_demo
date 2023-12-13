function Post({firstName, lastName, phone, role, message }) {
  return (
    <div className="post">
      <p>{firstName} {lastName}</p>
      <p>{phone}</p>
      <p>{role}</p>
      <p>{message}</p>
    </div>
  );
}

export default Post;
