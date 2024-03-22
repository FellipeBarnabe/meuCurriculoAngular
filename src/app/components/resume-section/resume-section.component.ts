import { Component, Input } from '@angular/core';
import { EducationSection, ResumeSection } from '../../models/ResumeSection';

import { NgFor } from '@angular/common';

@Component({
  selector: 'resume-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.css'
})
export class ResumeSectionComponent {
  @Input() resumeSectionList: ResumeSection[] = [] as ResumeSection[];
  @Input() educationSectionList: EducationSection[] = [] as EducationSection[];
}
