namespace BlazorApp;

public record Exercise(string Name, MuscleGroup MuscleGroup);
public record MuscleGroup(string Name, MuscleGroup? Parent = null, MuscleGroup? Child = null);
