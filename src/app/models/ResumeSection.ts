class PeriodActivities {
    period: string = "";
    activityList: string[] = []
}
export class ResumeSection extends PeriodActivities {
    role: string = "";
    position: string = "";

}

export class EducationSection extends PeriodActivities {
    course: string = "";
    institution: string = "";
}