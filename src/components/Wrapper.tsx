interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className="bg-background dark:bg-dark-background min-h-screen py-2">
        {children}
    </section>
  )
}

export default Wrapper