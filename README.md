**Design:** 

**Display state:**
<img width="1728" alt="Display_state" src="https://github.com/user-attachments/assets/cd088dcf-2709-4f24-bb09-69647f217c4f">

**State based on display. - Grouping by user is selected.**

<img width="1728" alt="Grouping_user" src="https://github.com/user-attachments/assets/8a12ca10-b8a7-4655-9c82-919b631aa245">

**Grouping by priority is selected.**

<img width="1728" alt="Grouping_priority" src="https://github.com/user-attachments/assets/761bc1ba-f6ac-4545-983f-3dd40cc8c99d">

**Card:**

<img width="837" alt="Card" src="https://github.com/user-attachments/assets/38938dd7-0226-4b82-9121-27ee3e9a7a61">

**Api:** https://api.quicksell.co/v1/internal/frontend-assignment

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
