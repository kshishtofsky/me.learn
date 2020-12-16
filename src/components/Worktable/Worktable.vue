<template lang="pug">
.worktable.container
  Courses
  .worktable-flex
    ProgressTable
    Homework
  Timetable
  Calls
</template>

<script>
import Courses from './Courses'
import ProgressTable from './Progress-table'
import Homework from './Homework'
import Timetable from './Timetable'
import Calls from './Calls'

export default {
  components: {
    Courses,
    ProgressTable,
    Homework,
    Timetable,
    Calls
  }
}
</script>

<style lang="scss" scoped>
.worktable-flex {
  display: flex;
  justify-content: space-between;
}
</style>
