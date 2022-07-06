import { useMutation, useQuery } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const { data, isLoading, isError, error } = useQuery(
    ["post-detail", post.id],
    () => fetchComments(post.id)
  );

  const {
    mutate: deleteMutate,
    isError: deleteError,
    isLoading: loadingDeleteMutation,
    isSuccess: deleteSuccess,
  } = useMutation(() => deletePost(post.id));

  const {
    mutate: updateMutate,
    isError: updateError,
    isLoading: loadingUpdateMutation,
    isSuccess: updateSuccess,
  } = useMutation(() => updatePost(post.id));

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={deleteMutate}>Delete</button> {}
      {deleteError && <p style={{ color: "red" }}>Error deleting the Post</p>}
      {loadingDeleteMutation && (
        <p style={{ color: "purple" }}>Deleting the Post...</p>
      )}
      {deleteSuccess && (
        <p style={{ color: "green" }}>Post has (not) been deleted</p>
      )}
      <button onClick={updateMutate}>Update title</button>
      {updateError && <p style={{ color: "red" }}>Error updating the Post</p>}
      {loadingUpdateMutation && (
        <p style={{ color: "purple" }}>Updating the Post...</p>
      )}
      {updateSuccess && (
        <p style={{ color: "green" }}>Post has (not) been updated</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
