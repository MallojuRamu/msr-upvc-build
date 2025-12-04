interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-primary-foreground" : "text-foreground"} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
