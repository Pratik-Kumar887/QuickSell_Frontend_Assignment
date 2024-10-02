# QuickSell_Frontend_Assignment
**Design:** 

**Display state:**

<img width="1728" alt="Display_state" src="https://github.com/user-attachments/assets/07b8a439-d726-4d95-bbd5-242700f7cb76">

**State based on display. - Grouping by user is selected.**

<img width="1728" alt="Grouping" src="https://github.com/user-attachments/assets/5dc65c6f-e78c-4723-9f88-257b92fdc539">

**Grouping by priority is selected.**

<img width="1728" alt="Grouping_priority" src="https://github.com/user-attachments/assets/0bbb8a6b-7f77-47b0-91e4-1f2a2e3c46fd">

**Card:**

<img width="837" alt="Card" src="https://github.com/user-attachments/assets/df29dd75-c187-4235-a729-bbd000124f9e">

Api :  https://api.quicksell.co/v1/internal/frontend-assignment 

You are required to create an interactive Kanban board application using React JS that interacts with the provided API from  https://api.quicksell.co/v1/internal/frontend-assignment

When a user clicks the "display" button and selects a grouping option, the Kanban board should dynamically adjust to reflect the user's choice.

The application should offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users should also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

The Kanban board should be responsive and visually appealing, with a design similar to the provided screenshots.

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**

4 - Urgent

3 - High

2 - Medium

1 - Low

0 - No priority

Additionally, the application should save the user's view state even after page reload.
