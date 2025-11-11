interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className="bg-background dark:bg-dark-background min-h-screen py-2 force-composite">
      {children}
    </section>
  );
};

export default Wrapper;
