import React from 'react';
import { Button, Text } from 'native-base';
import { inviteStyles } from '../../Invite/InviteDetailsStyle';
import PropTypes from 'prop-types';

const ClockInButton = ({ canClockIn, diffInMinutes, onClick }) => {
  let timeToClockIn = diffInMinutes;
  let timeUnit = 'MINUTES';

  if (timeToClockIn > 59) {
    timeToClockIn = timeToClockIn / 60;
    timeUnit = 'HOURS';
  }

  if (timeToClockIn > 23) {
    timeToClockIn = timeToClockIn / 24;
    timeUnit = 'DAYS';
  }

  if (canClockIn)
    return (
      <Button
        title={''}
        onPress={onClick}
        style={inviteStyles.clockInButton}
        full
        rounded
        bordered>
        <Text style={inviteStyles.textWhite}>Clock In Now!</Text>
      </Button>
    );

  if (timeToClockIn < 0)
    return (
      <Button
        title={''}
        onPress={() => {}}
        style={inviteStyles.clockInButtonDisabled}
        full
        rounded
        bordered>
        <Text style={inviteStyles.textWhite}>The Shift already started!</Text>
      </Button>
    );
  return (
    <Button
      title={''}
      onPress={() => {}}
      style={inviteStyles.clockInButtonDisabled}
      full
      rounded
      bordered>
      <Text style={inviteStyles.textWhite}>
        Clock In in {`${timeToClockIn.toFixed(2)}`} {timeUnit}
      </Text>
    </Button>
  );
};

ClockInButton.propTypes = {
  canClockIn: PropTypes.bool,
  diffInMinutes: PropTypes.number,
  onClick: PropTypes.func,
};

export { ClockInButton };
