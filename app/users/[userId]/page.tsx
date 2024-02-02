interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const page = ({ params }: UserIdPageProps) => {
  return <div>User ID: {params.userId}</div>;
};

export default page;
